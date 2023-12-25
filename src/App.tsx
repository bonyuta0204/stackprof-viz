import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import axios from 'axios';

type FileInfo = {
  path: string;
};

function App() {
  const [dumps, setDumps] = useState<FileInfo[]>([]);

  const loadFiles = async () => {
    const loadedDumps = await axios.get<FileInfo[]>('api/dumps');
    setDumps(loadedDumps.data);
  };

  useEffect(() => {
    loadFiles();
  }, []);

  return (
    <>
      <Navbar
        onClickFlamegraph={() => {
          console.log('flamegraph selected');
        }}
      />
      <Sidebar items={dumps.map((dump) => dump.path)} />
      <p>We are going to implement here</p>
    </>
  );
}

export default App;
