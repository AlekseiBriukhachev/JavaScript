import './app-info.css';

const AppInfo = ({dataState}) => {
    const increased = dataState.filter(item => item.increase).length;
    return (
          <div className="app-info">
              <h1>Учет сотрудников в компании Trask</h1>
              <h2>Общее число сотрудников: {dataState.length}</h2>
              <h2>Премию получат: {increased}</h2>
          </div>
    );
}

export default AppInfo;