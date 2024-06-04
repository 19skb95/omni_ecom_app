import logo from './logo.svg';
import './App.css';
import { Card, ConfigProvider } from 'antd'
import MainLayout from './component/common/mainLayout';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "ABCWhyte, Sans-serif",
          borderRadius: 2,
          colorText: "#212529",
          colorLink: "#47a477",
          colorLinkHover: "#47a477b0",
          fontSize: 12
        },
        components: {
          Layout: {
            headerBg: "#1d1e23",
          }
        }
      }}>
      <MainLayout />
    </ConfigProvider>

  );
}

export default App;
