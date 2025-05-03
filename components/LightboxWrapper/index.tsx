'use client';

import LightboxComponent, {
  LightboxExternalProps,
} from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';

const LightboxWrapper = (props: Omit<LightboxExternalProps, 'plugins'>) => {
  return (
    <LightboxComponent
      plugins={[Zoom, Captions, Fullscreen]}
      carousel={{ finite: true }}
      zoom={{
        scrollToZoom: true,
        maxZoomPixelRatio: 5,
        zoomInMultiplier: 2,
        doubleTapDelay: 300,
        doubleClickDelay: 300,
      }}
      render={{
        buttonPrev: () => null,
        buttonNext: () => null,
      }}
      styles={{
        container: { backgroundColor: 'rgba(0, 0, 0, .9)' },
        captionsDescription: { fontSize: '1rem' },
        captionsTitle: { fontSize: '1.2rem' },
      }}
      {...props}
    />
  );
};

export default LightboxWrapper;
