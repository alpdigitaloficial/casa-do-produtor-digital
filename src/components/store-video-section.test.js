import { describe, expect, test } from "bun:test";
import { STORE_VIDEO_POSTER, VIDEO_URL, resolveStoreVideo } from "./store-video-section";

describe("approved store video", () => {
  test("uses the supplied Mux playback ID without a generated cover", () => {
    expect(resolveStoreVideo(VIDEO_URL)).toEqual({
      native: false,
      src: "https://player.mux.com/0047Di3sQzYmp9GL8hWASgYGvypqttl5wmOx6dutTabk?autoplay=true",
    });
  });
  test("requests playback when the Mux player is activated", () => {
    const media = resolveStoreVideo(VIDEO_URL);
    expect(new URL(media?.src ?? "https://example.com").searchParams.get("autoplay")).toBe("true");
  });
  test("uses only the saved cover selected at 17 seconds", () => {
    expect(STORE_VIDEO_POSTER).toBe("/images/capa-video-17s.jpg");
  });
  test("hides the section when the video URL is empty", () => {
    expect(resolveStoreVideo("")).toBeNull();
  });
  test("uses native playback for MP4", () => {
    expect(resolveStoreVideo("https://example.com/store.mp4")).toEqual({ native: true, src: "https://example.com/store.mp4" });
  });
  test("converts YouTube and preserves Bunny embeds", () => {
    expect(resolveStoreVideo("https://youtu.be/abcd1234")?.src).toBe("https://www.youtube-nocookie.com/embed/abcd1234");
    expect(resolveStoreVideo("https://iframe.mediadelivery.net/embed/123/456")?.src).toBe("https://iframe.mediadelivery.net/embed/123/456");
  });
});