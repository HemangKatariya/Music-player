import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface PlayerState {
  play: boolean;
  shuffle: boolean;
  loop: boolean;
  volume: number;
  forward: boolean;
  backward: boolean;
  progress: number;
}

const initialPlayerState: PlayerState = {
  play: false,
  shuffle: false,
  loop: false,
  volume: 0,
  forward: false,
  backward: false,
  progress: 0,
};

const initialState: { player: PlayerState } = {
  player: initialPlayerState,
};

const musicSlice = createSlice({
  name: "music player",
  initialState,
  reducers: {
    setPlay: (state, action: PayloadAction<boolean>) => {
      state.player.play = action.payload;
    },
    setShuffle: (state, action: PayloadAction<boolean>) => {
      state.player.shuffle = action.payload;
    },
    setLoop: (state, action: PayloadAction<boolean>) => {
      state.player.loop = action.payload;
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state.player.volume = action.payload;
    },
    setForward: (state, action: PayloadAction<boolean>) => {
      state.player.forward = action.payload;
    },
    setBackward: (state, action: PayloadAction<boolean>) => {
      state.player.backward = action.payload;
    },
    setProgress: (state, action: PayloadAction<number>) => {
      state.player.progress = action.payload;
    },
  },
});

export const {
  setPlay,
  setShuffle,
  setLoop,
  setVolume,
  setBackward,
  setForward,
  setProgress,
} = musicSlice.actions;

export default musicSlice.reducer;
