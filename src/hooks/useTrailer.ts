import { useEffect, useState } from 'react';

import { getTrailer } from 'api/movieData';

export const useTrailer = ({
  id,
  setTrailer,
}: {
  id: string;
  setTrailer: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [youtubeId, setYoutubeId] = useState<string | null | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const data = await getTrailer(id);
      if (data) setYoutubeId(data.key);
      else {
        setYoutubeId(null);
        setTimeout(() => setTrailer(false), 1000);
      }
    })();
  }, [id]);

  return youtubeId;
};
