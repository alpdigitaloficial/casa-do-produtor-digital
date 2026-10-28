import { describe, expect, test } from "bun:test";
import { createHash } from "node:crypto";
import { readFileSync, readdirSync } from "node:fs";
import { logoAsset, facadeAsset, pressAsset, videoCoverAsset } from "./static-site-media";

describe("approved static site originals", () => {
  const originals = [
    [logoAsset, "852d2e5573f10030358b6c4a43547affbd807dbc4c34d01ede5383178cb8dfc0"],
    [facadeAsset, "f9016d6809f25ba4f5f437b0745ed8fabb100a15c172a00ca54c65af2a341f82"],
    [pressAsset, "b565b1c8747b11f2b2f47bf444973093dbca8016903497a3e728177421386005"],
    [videoCoverAsset, "85025d611056b676f31e92e6ed95dcbf233bf9a1604841bbc87a237a73b76f5e"],
  ];
  for (const [asset, hash] of originals) {
    test(`${asset.url} preserves the exact original and filename case`, () => {
      const filename = asset.url.split("/").pop();
      expect(readdirSync(new URL("../../public/images/", import.meta.url))).toContain(filename);
      const bytes = readFileSync(new URL(`../../public${asset.url}`, import.meta.url));
      expect(createHash("sha256").update(bytes).digest("hex")).toBe(hash);
      const pointer = JSON.parse(readFileSync(new URL(`../assets/${filename}.asset.json`, import.meta.url), "utf8"));
      expect(bytes.length).toBe(pointer.size);
    });
  }
});