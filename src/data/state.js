import { create } from "zustand";

const useConfig = create(() => ({ ...window.APP_DATA.config }));

const useConfigApp = create((set, get) => ({
  typingSize: 3,
  typingSizeVal: "h3",
  typingSizeInc: () => {
    let v = get().typingSize;
    v = v - 1;
    if (v < 1) {
      v = 1;
    }
    set({
      typingSize: v,
      typingSizeVal: `h${v}`,
    });
  },
  typingSizeDec: () => {
    let v = get().typingSize;
    v = v + 1;
    if (v > 6) {
      v = 6;
    }
    set({
      typingSize: v,
      typingSizeVal: `h${v}`,
    });
  },
}));

const useContent = create(() => ({
  content: window.APP_DATA.content,
}));

const useApp = create((set, get) => ({
  isContentEnd: false,
  contentActive: 0,
  setContentActive: (v) =>
    set(() => ({
      contentActive: v,
    })),
  contentNext: () => {
    let v = get().contentActive;
    const l = useContent.getState().content.length;
    v = v + 1;
    if (v == l) {
      set(() => ({
        isContentEnd: true,
      }));
      return;
    }
    get().setContentActive(v);
  },
  contentPrev: () => {
    let v = get().contentActive;
    v = v - 1;
    if (v < 0) {
      v = 0;
    }
    get().setContentActive(v);
  },
  contentReset: () =>
    set(() => ({
      contentActive: 0,
      isContentEnd: false,
    })),
}));

export { useConfig, useConfigApp, useContent, useApp };
