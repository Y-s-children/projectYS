## 게시판 페이지의 구조

BulletinView
--Path
--MultiDirectory
---SingleDirectory..1
---SingleDirectory..2
---AddDirectory

# modal 컴포넌트 설명

## 1. AddDirectoryModal (AddDirectory의 modal)

- props: visible, onClose, onConfirm
- visible은 modal의 visibility에 대한 props입니다.
- onClose는 confirm이 아닌 close에 대한 콜백함수 입니다.
- onConfirm은 confirm이 되었을때에 대한 콜백함수 입니다. 파일/폴더인지에 관한 kind와 이름을 뜻하는 name을 매개변수로 전달합니다.

- 하위 컴포넌트: ChooseKind, ChooseName
- ChooseKind 컴포넌트에서 폴더를 생성하는지 파일을 생성하는지에 대한 정보를 얻고,
- ChooseName에서 생성하는 폴더나 파일의 이름에 대한 정보를 얻습니다.
