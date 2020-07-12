import React from 'react';

import BasicGrid from './BasicGrid';
import Challenge from './Challenge/Challenge';
import ImplicitExplicit from './implicitExplicit';
import AligningGridItems from './AligningGridItems';
import AligningTrack from './AligningTrack';
import MinMax from './MinMax';
import AutoFillAutoFit from './AutoFillAutoFit';

const PlaygroundPhase2Index = props => {
  return (
    <div>
      <div>
        <h1>Basic Grid</h1>
        <BasicGrid />
      </div>
      <div>
        <h1>Challenge</h1>
        <Challenge />
      </div>
      <div>
        <h1>Implicit and Explicit</h1>
        <ImplicitExplicit />
      </div>
      <div>
        <h1>Aligning Grid Items</h1>
        <AligningGridItems />
      </div>
      <div>
        <h1>Aligning Track</h1>
        <AligningTrack />
      </div>
      <div>
        <h1>Min and Max Content</h1>
        <MinMax />
      </div>
      <div>
        <h1>Auto-Fill and Auto-Fit</h1>
        <AutoFillAutoFit />
      </div>
    </div>
  )
}

export default PlaygroundPhase2Index;