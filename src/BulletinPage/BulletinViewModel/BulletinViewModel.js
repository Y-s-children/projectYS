export default class BulletinViewModel {
  constructor() {}

  // private
  _directoryInfo = {
    // key: 디렉토리 이름, value: {경로, 하위 디렉토리 이름들의 배열}
    root: {
      path: "/root",
      subDir: ["프론트 회의록", "백엔드 회의록", "참고문헌"],
    },
    "프론트 회의록": {
      path: "/root/프론트 회의록",
      subDir: ["프론트 회의록1", "프론트 회의록2", "프론트 회의록3"],
    },
    "백엔드 회의록": {
      path: "/root/백엔드 회의록",
      subDir: ["백엔드 회의록1", "백엔드 회의록2", "백엔드 회의록3"],
    },
    참고문헌: {
      path: "/root/참고문헌",
      subDir: ["참고문헌1", "참고문헌2", "참고문헌3"],
    },
    "프론트 회의록1": {
      path: "/root/프론트 회의록/프론트 회의록1",
      subDir: [],
    },
  };

  // public
  getSubDirectoryNames(directoryName) {
    return this._directoryInfo[directoryName].subDir;
  }

  getDirectoryPath(directoryName) {
    return this._directoryInfo[directoryName].path;
  }

  addNewDirectory(directoryName, directoryPath, parentDirectoryName) {
    this._directoryInfo[parentDirectoryName].subDir.push(directoryName);
    this._directoryInfo[directoryName] = { path: directoryPath, subDir: [] };
  }
}
