import { describe, expect, test } from "bun:test";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import * as media from "./local-media";
import { responsiveImage } from "./responsive-image";

describe("recovered original photographs", () => {
  test("all 22 approved photographs resolve to local WebP derivatives with intact originals", () => {
    expect(Object.values(media)).toHaveLength(22);
    for (const photo of Object.values(media)) {
      expect(photo.url.startsWith("/images/")).toBe(true);
      const bytes = readFileSync(new URL(`../../public${photo.url}`, import.meta.url));
      expect(bytes.subarray(0, 4).toString()).toBe("RIFF");
      expect(bytes.subarray(8, 12).toString()).toBe("WEBP");
      expect(responsiveImage(photo.url)?.width).toBeGreaterThan(0);
      const originalUrl = photo.url.replace(".webp", photo === media.teamCounterAsset ? ".jpeg" : ".jpg");
      const original = readFileSync(new URL(`../../public${originalUrl}`, import.meta.url));
      const pointer = JSON.parse(readFileSync(new URL(`../assets/${originalUrl.split("/").pop()}.asset.json`, import.meta.url), "utf8"));
      expect(original.length).toBe(pointer.size);
    }
  });
  test("team originals remain byte-for-byte identical to recovered originals", () => {
    const originals = [
      ["/images/equipe-so-pessoas.jpg", "b78bb81ab04cfad5616edab91feae8923a929caccd993ed109decd859ec30648"],
      ["/images/equipe-quatro-balcao.jpeg", "ca21e2142e22040b4e006d7be783e25bba326155249a8cf032d061b8d097d9aa"],
    ];
    for (const [url, hash] of originals) {
      expect(createHash("sha256").update(readFileSync(new URL(`../../public${url}`, import.meta.url))).digest("hex")).toBe(hash);
    }
  });
});