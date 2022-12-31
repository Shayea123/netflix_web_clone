import React from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import "./Row.css";


function SkeletonCard() {
    console.log("SkeletonCard rendered");
    return (
        <div className="row__poster row__posterLarge">
          <SkeletonTheme color="#000" highlightColor="#896523" baseColor='#172e45'>
            <Skeleton height={200} width={200} duration={2} count={50} />
          </SkeletonTheme>
        </div>
      );
}

export default SkeletonCard