import { describe, expect, test } from "bun:test";
import { POSTER_TIME_SEGUNDOS, VIDEO_URL, resolveStoreVideo } from "./store-video-section";

describe("approved store video", () => {
  test("uses the supplied Mux playback ID and 15 second cover", () => {
    expect(POSTER_TIME_SEGUNDOS).toBe(15);
    expect(resolveStoreVideo(VIDEO_URL, POSTER_TIME_SEGUNDOS)).toEqual({
      native: false,
      src: "https://player.mux.com/0047Di3sQzYmp9GL8hWASgYGvypqttl5wmOx6dutTabk",
      poster: "https://image.mux.com/0047Di3sQzYmp9GL8hWASgYGvypqttl5wmOx6dutTabk/thumbnail.jpg?time=15",
    });
  });
  test("hides the section when the video URL is empty", () => {
    expect(resolveStoreVideo("", 15)).toBeNull();
  });
  test("uses native playback for MP4", () => {
    expect(resolveStoreVideo("https://example.com/store.mp4", 15)).toEqual({ native: true, src: "https://example.com/store.mp4" });
  });
  test("converts YouTube and preserves Bunny embeds", () => {
    expect(resolveStoreVideo("https://youtu.be/abcd1234", 15)?.src).toBe("https://www.youtube-nocookie.com/embed/abcd1234");
    expect(resolveStoreVideo("https://iframe.mediadelivery.net/embed/123/456", 15)?.src).toBe("https://iframe.mediadelivery.net/embed/123/456");
  });
});