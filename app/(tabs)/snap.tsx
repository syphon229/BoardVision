import { useEffect } from "react";

import * as MediaLibrary from 'expo-media-library';

export default function Snap() {
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();

  useEffect(() => {
    if (!permissionResponse?.granted) {
      requestPermission();
    }
  }, []);
}
