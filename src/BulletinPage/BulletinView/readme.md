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

- props : path, onClick(콜백)
- 주어진 디렉토리 경로를 바탕으로 터치 가능한 경로 컴포넌트를 화면에 표시합니다.
- 경로를 Click하면 클릭한 디렉토리의 경로를 onClick 콜백함수의 첫번째 인자로 제공합니다.

## 2. MultiDirectory

- props : subDirectoryNames, onChangeDirectory(콜백), onAddDirectory(콜백)
- 하위 디렉토리의 이름들을 받아서 각 디렉토리를 SingleDirectory 형태로 화면에 표시합니다.
- 디렉토리의 이동이 요청되면 이동할 디렉토리의 이름을 onChangeDirectory 콜백함수의 첫번째 인자로 제공합니다.
- 디렉토리의 생성이 요청되면, onAddDirectory 콜백함수에게 이름과, 속성을 인자로 제공합니다.

## 3. SingleDirectory

- props : name, onClick(콜백)
- 디렉토리의 이름을 받아서 해당 디렉토리를 화면에 표시합니다.
- 컴포넌트의 클릭 가능한 부분을 클릭하면 name을 onClick 콜백 함수에 전달합니다.

## 4. addDirectory

- props : name, onClick(콜백)
- onClick이 발생하면 새로운 디렉토리 또는 파일을 생성합니다.
- 사용자로부터 새로운 디렉토리 또는 파일에 대한 정보를 받은뒤, 해당 정보를 onClick 콜백함수에 전달합니다.
- 사용자로부터의 정보는 addDirectoryModal을 통해서 받습니다.
