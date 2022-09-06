import './style.css'


function Alfa(props) {

  const {
    iframeSource = '<div class="sketchfab-embed-wrapper"> <iframe title="Alfa01" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="600" height="500" src="https://sketchfab.com/models/32ba02a55a90417aa4ba98fcac06e052/embed"> </iframe></div>'
  } = props;

  const {
    iframeVideo = '<div style="height: 0; padding-bottom: calc(100.00%); position:relative; width: 100%;"><iframe allow="autoplay; gyroscope;" referrerpolicy="strict-origin" src="https://www.kapwing.com/e/6316de6121b7d20aeeb1a73b?autoplay=true" style="border:0; height:100%; left:0; overflow:hidden; position:absolute; top:0; width:"100%" width="100%" controls loop ></iframe></div>'
  } = props;


  return (
    < div className='container' >
    <p>Hacer un grid</p>
      <div
        className="blender"
        dangerouslySetInnerHTML={{ __html: iframeSource }}>
      </div>
      <div
        className="video"
        dangerouslySetInnerHTML={{ __html: iframeVideo }}>
      </div>
      <a href="https://imgbox.com/F57kqhzn" ><img className="alfaimg" src="https://thumbs2.imgbox.com/9f/be/F57kqhzn_t.jpg" alt="alfa" /></a>
    </div>

  );
}

export default Alfa;

