import { Dump } from '../types/dump';

export class ProfileResult {
  private dump: Dump;

  constructor(dump: Dump) {
    this.dump = dump;
  }

  public getFrames() {
    return Object.keys(this.dump.frames).map((key) => {
      return {
        id: key,
        ...this.dump.frames[key],
      };
    });
  }
}
