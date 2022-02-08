## 게시판 페이지의 구조

BulletinView
--Path
--MultiDirectory
---SingleDirectory..1
---SingleDirectory..2
---AddDirectory

# non-modal 컴포넌트 설명

## 0. BulletinView

- BulletinView의 가장 큰 목적은 렌더링을 관리하는 것입니다.
- modal을 관리하기 위한 visibility state를 제외하면, 다른 하위 non-modal 컴포넌트에서는 state를 생성하지 않습니다.
- 모든 렌더링은 BulletinView에서 일어나며, 그로인해 하위 컴포넌트가 모두 재 렌더링되는데, 이는 게시판 페이지의 특성상 비효율적이지 않습니다.
- 렌더링이 필요한 event가 발생하면 BulletinView의 콜백함수로 처리합니다.
- 따라서 BulletinView 로직의 대부분은 event가 발생했을때, state를 적절하게 바꾸는것 뿐입니다.
- BulletinViewModel은 오직 BulletinView에서만 사용하므로, 여러개의 클래스 인스턴스간 동일성을 확인할 필요가 없습니다.

## 1. Path

### props

1. path
2. onClick - callback(newPath)

## 2. MultiDirectory

### props

1. subDirectoryNames - []
2. onDirectoryMoveForward - callback(directoryName)
3. onCreateDirectory - callback(directoryName)
4. onCreateFile - callback(fileName, contentURI)
5. onModifyDirectoryName - callback(originalDirectory ,modifiedDiretoryName)
6. onDeleteDirectory - callback(directoryName)

## 3. SingleDirectory

### props

1. directoryName - string
2. onDirectoryMoveForward - callback(directoryName)
3. onModifyDirectoryName - callback(originalName, modifiedName)
4. onDeleteDirectory - callback(directoryName)

## 4. addDirectory

### props

1. name - string
2. onCreateDirectory - callback(directoryName)
3. onCreateFile - callback(fileName, contentURI)

# 이름 규칙

### 1. 변수

- 성격, 특성: type (bad: kind)
- 디렉토리, 폴더: Directory (bad: folder)
- 파일: file
- 생성, 추가: create (bad: add)
- 삭제: delete (bad: remove)
- 수정: modify (bad: change, new)
- ~~의 경로: + path
- ~~의 이름: + name
- 현재 디렉토리/파일: current
- 상위 디렉토리/파일: parent
- 하위 디렉토리/파일: sub

### 2. 이벤트

- 확인 버튼을 누르는 경우: confirm
- 취소 버튼을 누르는 경우: cancel
- 버튼 없이 그냥 나가는 경우: dismiss
- modal이 닫히는 경우: close

### 3. 이동

- 하위 디렉토리로 이동: Moveforward
- 상위 디렉토리로 이동: Movebackward
- 경로로 직접 이동: MoveDirectly
