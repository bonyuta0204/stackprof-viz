import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import axios from 'axios';
import { Dump } from './types/dump';
import ProfileResultView from './components/ProfileResultView';

type FileInfo = {
  path: string;
};

function App() {
  const [dumps, setDumps] = useState<FileInfo[]>([]);

  const [currentDump, setCurrentDump] = useState<{
    path: string;
    dump: Dump;
  }>();

  const loadFiles = async () => {
    const loadedDumps = await axios.get<FileInfo[]>('api/dumps');
    setDumps(loadedDumps.data);
  };

  const loadDump = async (path: string) => {
    // we have to encode path to be able to use it in url
    const encodedPath = encodeURIComponent(path);
    const loadedDump = await axios.get<Dump>(`api/dumps/${encodedPath}`);
    setCurrentDump({
      path: path,
      dump: loadedDump.data,
    });
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
      <div className="flex h-full overflow-hidden">
        <Sidebar
          items={dumps.map((dump) => dump.path)}
          onClickItem={loadDump}
        />
        {currentDump ? (
          <ProfileResultView
            dump={currentDump?.dump}
            path={currentDump?.path}
          />
        ) : (
          'No dump selected'
        )}
      </div>
    </>
  );
}

export default App;
