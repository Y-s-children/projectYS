## 게시판 페이지의 구조

BulletinView
--Path
--MultiDirectory
---SingleDirectory..1
---SingleDirectory..2
---AddDirectory

# non-modal 컴포넌트 설명

## 1. Path

- props : path, onClick(콜백)
- 주어진 디렉토리 경로를 바탕으로 터치 가능한 경로 컴포넌트를 화면에 표시합니다.
- 경로를 Click하면 클릭한 디렉토리의 이름을 onClick 콜백함수의 첫번째 인자로 제공합니다.

## 2. MultiDirectory

- props : name, onChangeDirectory(콜백)
- 디렉토리의 이름을 받아서 해당 디렉토리의 하위 디렉토리를 SingleDirectory 형태로 화면에 표시합니다.
- 디렉토리의 이동이 요청되면 이동할 디렉토리의 이름을 onChangeDirectory 콜백함수의 첫번째 인자로 제공합니다.

## 3. SingleDirectory

- props : name, onClick(콜백)
- 디렉토리의 이름을 받아서 해당 디렉토리를 화면에 표시합니다.
- 컴포넌트의 클릭 가능한 부분을 클릭하면 name을 onClick 콜백 함수에 전달합니다.

## 4. addDirectory

- props : name, onClick(콜백)
- onClick이 발생하면 새로운 디렉토리 또는 파일을 생성합니다.
- 사용자로부터 새로운 디렉토리 또는 파일에 대한 정보를 받은뒤, 해당 정보를 onClick 콜백함수에 전달합니다.
- 사용자로부터의 정보는 addDirectoryModal을 통해서 받습니다.
