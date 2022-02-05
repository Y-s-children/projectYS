## 게시판 페이지의 구조

BulletinView
--Path
--MultiDirectory
---SingleDirectory..1
---SingleDirectory..2
---AddDirectory

# modal 컴포넌트 설명

## 1. AddDirectoryModal (AddDirectory의 modal)

- 하위 컴포넌트: ChooseKind, ChooseName
- ChooseKind 컴포넌트에서 폴더를 생성하는지 파일을 생성하는지에 대한 정보를 얻고,
- ChooseName에서 생성하는 폴더나 파일의 이름에 대한 정보를 얻습니다.
