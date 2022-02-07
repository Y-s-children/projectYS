export default class BulletinViewModel {
  constructor() {}

  // private
  _directoryInfo = {
    root: {
      type: "folder",
      name: "root",
      subDir: {
        "프론트 회의록": {
          name: "프론트 회의록",
          type: "folder",
          subDir: {
            "회의록 1": {
              name: "회의록 1",
              type: "folder",
              subDir: {},
            },
            "회의록 2": {
              name: "회의록 2",
              type: "folder",
              subDir: {},
            },
          },
        },
        참고문헌: {
          name: "참고문헌",
          type: "file",
          subDir: {},
        },
      },
    },
  };

  // 이름이 directoryName 인 디렉토리로 이동.
  _moveToDirectory(directoryPath) {
    let path = directoryPath.split("/"); // root, 프론트 회의록, 회의록 2
    path.shift(); // 첫번째 요소는 ""

    let currentDirectory = this._directoryInfo[path[0]];
    let nextPathIdx = 1;
    while (nextPathIdx !== path.length) {
      currentDirectory = currentDirectory.subDir[path[nextPathIdx]];
      ++nextPathIdx;
    }

    return currentDirectory;
  }

  // create, read, update, delete
  createNewDirectory(directoryName, directoryPath, directoryType = "folder") {
    let path = directoryPath.split("/");
    path.shift(); // 첫번째 요소는 ""

    // 생성할 파일 또는 디렉토리의 부모 디렉토리로 이동. (생성할 위치)
    let parentDirectory = this._moveToDirectory(directoryPath);

    parentDirectory.subDir[directoryName] = {
      name: directoryName,
      subDir: {},
      type: directoryType,
    };
  }

  deleteDirectory(directoryPath) {
    let path = directoryPath.split("/");
    path.shift();

    // 부모 디렉토리의 경로 계산
    let parentDirectoryPath = "";
    for (let i = 0; i < path.length - 1; ++i) {
      parentDirectoryPath = parentDirectoryPath + "/" + path[i];
    }

    // 삭제할 파일 또는 디렉토리의 부모 디렉토리로 이동.
    let parentDirectory = this._moveToDirectory(parentDirectoryPath);

    // 삭제할 디렉토리 삭제
    const directoryName = path[path.length - 1];
    delete parentDirectory.subDir[directoryName];
  }

  getSubDirectoryNames(directoryPath) {
    const directory = this._moveToDirectory(directoryPath);

    let subDirectoryNames = [];
    for (const subDirectory in directory.subDir) {
      subDirectoryNames.push(subDirectory);
    }

    return [...subDirectoryNames]; // 배열 또는 객체는 참조가 아닌 값을 전달하여야 한다.
  }
}
