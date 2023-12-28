import { ProfileResult } from '../lib/ProfileResult';
import { Dump } from '../types/dump';

type ProfileResultProps = {
  dump: Dump;
  path: string;
};

const ProfileResultView = (props: ProfileResultProps) => {
  const result = new ProfileResult(props.dump);
  const frames = result.getFrames();

  return (
    <div className="flex flex-col h-full">
      <h1 className="text-xl font-semibold mb-4">
        Profile result for {props.path}
      </h1>

      <div className="overflow-x-auto grow">
        <table className="min-w-full text-sm divide-y divide-gray-200">
          <thead className="sticky">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sticky top-0 z-10 bg-white">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sticky top-0 z-10 bg-white">
                Samples
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sticky top-0 z-10 bg-white">
                Total Samples
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {frames.map((frame) => (
              <tr key={frame.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-500">
                  {frame.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {frame.samples}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {frame.total_samples}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfileResultView;
