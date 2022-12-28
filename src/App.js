import Notice from './component/Notice';
import noticedb from './data/notice.json';

function App() {
  const noticejs = noticedb;

  return (
    <div className="App">
      {/* 컴포넌트 자바스크립트 실행문! 옵션(속성) 매개인자로 이해 */}
      <Notice 
        objTitle={noticejs.title}
        objCls={noticejs.cls}
        objContents={noticejs.content}
      ></Notice>

    </div>
  );
}

export default App;