

function Notice( props ){
    //리턴 하위에 자식으로 div가 1개 존재 해야 함
    //부모태그가 하나
    //컴포넌트의 첫번쨰인자 props의 기능은 실행의 옵션(속성)에 접근
    /*
      컴포넌트 함수는 손오공,
      컨포넌트는 손오공 분신
    */
    return (
      <>
        <h2>{props.objTitle}</h2>
        <p>{ props.objContents.length }건의 게시글이 있음</p>
        {/* ul>li*5{공지사항제목} */}
        <ul className={ `${props.objCls[0]} ${props.objCls[1]}` }>
          {
             props.objContents.map(( item, index ) => {
              // console.log( item , index );
              // map 메서드는 정렬객체(props.objContents)를 선택자로 한다.
              // array / object만 map 사용가능
              return (
                    <li key={'list'+index}>
                        <p>{item.subject}</p>
                        <div>{item.objContents}</div>
                    </li>
                );
             })
          }
        </ul>
      </>
    );
  }
  
  export default Notice;
