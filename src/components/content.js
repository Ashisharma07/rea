import React from 'react';
import './header.css';
import content from './nozzle.jpg';
import content1 from './pro-pack.png';
import content2 from './sealant.png';
import content3 from './uses.png';
import content4 from './dual-bead-pro-logo.jpg';

const Content = () => {
  return (
    <>
      <div className='first-content'>
        <div>
          <img src={content} className='content' alt='' />
        </div>
        <div>
          <div>
            <h1 className='dual'>Dual-Bead Pro</h1>
          </div>
          <div className='para-1'>
            <h3 className='features'>Features:</h3>
            <li>Fits standard sausage B-line gun</li>
            <li>Adjustable independent nozzles</li>
            <li>Can apply two equal beads up to a 7” spacing</li>
            <li>
              Can be used in recessed joints and on inside and outside corners
            </li>
          </div>
          <div className='para-2'>
            <h3 className='apps'>Application:</h3>
            <li>Installing pre cured silicone/urethane strips</li>
            <li>Any install requiring two parallel sealant/adhesive beads</li>
          </div>
        </div>
      </div>

      <div className='second-content'>
        <div>
          <div>
            <img src={content1} className='content-1' alt='' />
          </div>
          <div className='dual-1'>
            Dual-Bead Pro Pack- all the pieces in one package
          </div>
        </div>
        <div>
          <div>
            <img src={content2} className='content-2' alt='' />
          </div>
          <div className='dual-2'>How the tip applies the sealant</div>
        </div>
        <div>
          <div>
            <img src={content3} className='content-3' alt='' />
          </div>
          <div className='dual-3'>
            Different applications the tip can be used for
          </div>
        </div>
      </div>

      <div className='third-content'>
        <div>
          <h2 className='history'>Product History :</h2>
          <p className='para-3 pr-75'>
            We have been in the Building Maintenance industry, caulking high
            rise buildings and warehouse tilt ups for over 30 years. Over that
            time, we have used dozens of different products. Of these products,
            there are five major manufacturers (Tremco, Dow Corning, GE, Sika,
            Pecora) that make a pre-cured silicone/urethane strip, which are all
            applied the same way. Typical installation is the application of
            masking tape to either side of the failed caulk joint to help aid in
            width control and clean up. Every joint is a different width and
            wall detail. That is a lot of time and money spent on preparation
            and inefficient to say the least.
          </p>

          <p className='para-4 pr-75'>
            Now for the breakthrough: “Dual-Bead Pro” is a dual adjustable
            nozzle system for a B-line sausage/bulk gun.
          </p>

          <p className='para-5 pr-75'>
            This unique nozzle design was created to accelerate the installation
            of pre-cured silicone/urethane strip product. This strip product we
            have used on countless occasions. You apply one bead of sealant on
            either side of a failed caulk joint, (rather than cut out the old
            material), and bond this strip to the new sealant. This creates a
            Bridge joint which avoids 3 sided bonding and allows better movement
            capability of the joint. This new strip then becomes the
            waterproofing for the joint. Much of the labor cost is with the
            installation of the two beads on either side of the joint. You must
            measure the width of the joint, apply two beads at the exact
            distance apart and bond the appropriately sized strip to those
            beads.
          </p>

          <p className='para-6 pr-75'>
            “Dual-Bead Pro” applies both beads of sealant at the same time, can
            accommodate any width from 0"-7" apart and can be adjusted to
            accommodate any change in wall details, (including inside and
            outside corners) without having to remove the nozzle from the B-line
            sausage/bulk gun to do so. Once you set your width, you lock that
            spacing in and start working. This dramatically cuts down on
            measuring time and reduces waste as the material is applied exactly
            where it is required.
          </p>

          <p className='para-7 pr-75'>
            We have been using this design for several years on many different
            types of installations from bonding metal channels to walls and base
            boards. We can confidently stand behind the statement of “increased
            productivity by 40% at minimum”. That said, we are aware there are
            double bead nozzles out there, but none are adjustable like the
            “Dual-Bead Pro”.
          </p>

          <p className='para-8 pr-75'>
            Dean Driscoll, Owner DRI-CITIES Waterproofing Solutions
          </p>
        </div>
        <div>
          <div className='video'>
            <iframe
              width='481'
              height='287'
              src='https://www.youtube.com/embed/EpYwxiXqcrY'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <img src={content4} className='content-4' alt='' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
