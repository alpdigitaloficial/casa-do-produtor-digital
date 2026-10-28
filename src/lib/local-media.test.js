import { describe, expect, test } from "bun:test";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import * as media from "./local-media";

describe("recovered original photographs", () => {
  test("all 18 approved photographs resolve to real local JPEGs", () => {
    expect(Object.values(media)).toHaveLength(18);
    for (const photo of Object.values(media)) {
      expect(photo.url.startsWith("/images/")).toBe(true);
      const bytes = readFileSync(new URL(`../../public${photo.url}`, import.meta.url));
      expect(Array.from(bytes.subarray(0, 3))).toEqual([255, 216, 255]);
      const pointer = JSON.parse(readFileSync(new URL(`../assets/${photo.url.split("/").pop()}.asset.json`, import.meta.url), "utf8"));
      expect(bytes.length).toBe(pointer.size);
    }
  });
  test("team originals remain byte-for-byte identical to recovered originals", () => {
    const originals = [
      [media.teamPeopleAsset.url, "b78bb81ab04cfad5616edab91feae8923a929caccd993ed109decd859ec30648"],
      [media.teamCounterAsset.url, "ca21e2142e22040b4e006d7be783e25bba326155249a8cf032d061b8d097d9aa"],
    ];
    for (const [url, hash] of originals) {
      expect(createHash("sha256").update(readFileSync(new URL(`../../public${url}`, import.meta.url))).digest("hex")).toBe(hash);
    }
  });
});