# 구현 요구사항 체크리스트

## 기본 요구사항
* [ ] 각 운동 루틴은 세부 운동 항목을 갖는다.
  * [ ] 세부 운동 항목은 1세트가 10초에서 60초 사이의 운동 시간을 갖는다.
  * [ ] 세트는 1이상 10이하의 값을 갖는다.
* [ ] 운동은 제목과 한 세트당 운동 시간과 세트횟수를 기본 속성으로 갖는다.
* [ ] 매일 운동 루틴은 운동 등록 화면과 운동 실행 화면으로 나뉜다.
  * [ ] [운동 등록 화면]은 **상단 헤더**, **툴바**, **운동 루틴 목록**, **운동 목록**으로 나뉜다.
  * [ ] [운동 실행 화면]은 **상단 헤더**, **툴바**, **운동 목록**으로 나뉜다.

## 운동 등록 화면 [상단 헤더] 요구사항
* [ ] 사전 과제의 제목(**"매일 운동 루틴"**)이 표시된다.

## 운동 등록 화면 [툴바] 요구사항
툴바는 추가/삭제 버튼과 운동들의 전체 시간이 표시된다.

* [ ] **[운동 추가]** 버튼 요구사항
  * [ ] [운동 입력부]가 [운동 목록]의 하단에 노출된다.
* [ ] **[삭제]** 버튼 요구사항
  * [ ] [운동 목록]에 체크 박스가 체크된 운동 목록을 삭제한다.
* [ ] **[전체 시간]** 표시 요구사항
  * [ ] 현재 운동 루틴의 전체 운동 소요 시간을 m분 n초로 표시한다.
* [ ] 운동 루틴이 선택되지 않은 경우 **[운동 추가]**, **[삭제]** 버튼은 비활성화되며, **[전체 시간 표시]** 는 사라진다.

## 운동 등록 화면 [운동 루틴 목록] 요구사항

운동 루틴 목록을 **표시/추가/편집/삭제**할 수 있는 영역이다.

* [ ] 현재 선택된 운동 루틴이 하이라이트된다.
* [ ] 운동 루틴 목록은 최근 추가된 것이 목록의 상단에 추가된다.
* [ ] **[새 운동 루틴]** 버튼을 누르면 운동 루틴을 추가할 수 있다.
  * [ ] 입력부(Input text)는 운동 루틴 목록의 최상단에 노출된다.
  * [ ] 운동 루틴 이름을 입력할 수 있는 입력부가 표시되고 ENTER키를 누르면 저장, ESC키를 누르면 취소된다.
  * [ ] 입력 후에 입력부는 사라진다.
* [ ] **[수정]** 버튼 요구사항
  * [ ] 클릭하면 입력부(Input text)가 운동 루틴 목록의 최상단에 노출된다.
  * [ ] 운동 루틴의 이름이 입력부에 자동으로 입력된다.
  * [ ] 이름 수정 후 ENTER키를 누르면 수정 모드가 끝나고, 운동 루틴 이름이 변경된다.
  * [ ] ESC키를 누르면 취소된다.
* [ ] **[삭제]** 버튼 요구사항
  * [ ] 클릭하면 confirm 창으로 삭제여부를 한번 더 표시한다.
  * [ ] 확인할 경우 운동 루틴이 삭제되고 목록에서 사라진다.

## 운동 등록 화면 [운동 목록] 요구사항

운동 목록을 **표시/편집**할 수 있고 운동을 시작할 수 있는 영역이다.

* [ ] 각 목록에는 체크 박스, 운동 이름, 한 세트당 운동 시간, 세트횟수가 표시된다.
* [ ] 운동 루틴이 선택되지 않은 경우 운동 목록은 비어 있다.
* [ ] **[운동 입력부]** 요구사항
  * [ ] 입력부가 목록 하단에 노출된다.
  * [ ] 입력부는 운동 이름, 한 세트당 운동 시간, 세트 횟수를 입력 받는다.
  * [ ] 운동 이름은 필수 값으로 좌우 공백을 제거하고 최소 한 글자라도 입력되어야 한다.
  * [ ] 한 세트 당 운동 시간과 세트 횟수는 입력하지 않거나 유효하지 않는 값일 경우 기본값으로 각각 30초, 1회를 설정한다.
  * [ ] ENTER키(혹은 저장 버튼)를 누를 경우 저장하고 ESC키(혹은 취소 버튼)를 누를 경우 취소한다.
  * [ ] 입력부가 사라지고 운동이 목록 하단에 추가된다.
* [ ] **[수정]** 버튼 요구사항
  * [ ] 클릭하면 **[운동 입력부]** 가 목록 하단에 노출된다.
  * [ ] 운동 정보가 입력부에 자동으로 입력된다.
  * [ ] 수정 후 ENTER키(혹은 저장 버튼)을 누를 경우 저장하고 ESC키(혹은 취소 버튼)을 누를 경우 취소한다.
  * [ ] 입력부가 사라지고 운동 정보가 수정된다.
* [ ] **[운동 시작]** 버튼 요구사항
  * [ ] 클릭하면 **[운동 실행 화면]** 으로 변경된다.
  * [ ] 운동 루틴이 선택되지 않은 경우 비활성화된다.


## 운동 실행 화면 [상단 헤더] 요구사항

현재 진행 중인 운동의 상태 정보가 표시되는 영역이다.

* [ ] 현재 진행 중인 운동의 상태 정보가 다음과 같이 표시된다.
  * [ ] **(운동 루틴 이름): (현재 운동 이름) (진행 시간) / (한 세트 시간) (n세트 진행 중)**
  * [ ] 운동이 진행될수록 **"진행 시간"** 이 실시간으로 늘어난다.
  * [ ] 운동 한 세트가 완료되면 **"세트 진행 중"** 의 카운트가 실시간으로 증가한다.
* [ ] 운동 루틴이 완료되면 완료 정보가 다음과 같이 표시된다.
  * [ ] (현재 운동 루틴 이름) 완료

## 운동 실행 화면 [툴바] 요구사항

현재 운동의 진행 시간과 전체 운동 시간이 실시간으로 표시되는 영역이다.

* [ ] 운동 실행 화면으로 변경되면 즉시 운동이 시작되며 타이머가 동작해야 한다.
* [ ] **[툴바]** 요구 사항
  * [ ] 운동의 진행 시간과 전체 운동 시간을 실시간으로 표시한다.
  **(진행 시간 m분 n초) / 전체 운동 시간 m분 n초)**

## 운동 실행 화면 [운동 목록] 요구사항

운동 이름, 한 세트당 운동 시간, 세트횟수가 목록으로 표시되는 영역이다.

* [ ] 운동 목록은 운동 이름, 한 세트당 운동 시간, 세트횟수가 표시된다.
  * [ ] 현재 진행 중인 운동이 하이라이트되며 해당 운동이 끝나면 자동으로 다음 운동으로 넘어간다.
  * [ ] 완료된 운동은 텍스트 색을 다르게 표시한다.
  * [ ] 전체 운동이 완료되면 **[완료]** 버튼이 나타난다.
* [ ] **[일시정지]** 버튼 요구사항
  * [ ] 운동을 일시 정지하여 상단 헤더와 툴바의 진행 시간을 정지한다.
* [ ] **[재시작]** 버튼 요구사항
  * [ ] 일시 정지한 운동을 다시 시작하여 상단 헤더와 툴바의 진행 시간을 재개한다.
* [ ] **[운동 멈추기]** 버튼 요구사항
  * [ ] 운동을 멈추고 **[운동 등록 화면]** 으로 돌아간다.
* [ ] **[완료]** 버튼 요구사항
  * [ ] 운동이 완료된 후 나타나는 버튼으로 누를 경우 **[운동 등록 화면]** 으로 돌아간다.