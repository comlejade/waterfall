import { useEffect, useRef, useState } from 'react'
import './grid.css'

let source = [
  {id: 1, url: 'https://img2.baidu.com/it/u=495835036,1981564014&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375'},
  {id: 2, url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F8b0f8331f4c4a13d3a94f8761e5e583c30242e8e13bf7-eGTYCv_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668319094&t=2221b096e144ca84667c7d56f14b6c99'},
  {id: 3, url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fff16edba4a7122476c64fa5ad7053a92ce99ae013bd9f-eaemlO_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668319094&t=7c4811ba3f4c2afc87d33109d868dba0'},
  {id: 4, url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F2448ef88048c2aca89232ed8962888d8c7dd462028359-9KyB9b_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668319094&t=fcf4f239dd10dee7f11f3a893b1aaf10'},
  {id: 5, url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F00ddcaa15a09aadb4d15f4d2b767a9e378c7055c8f9f5-0xcZvm_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668319094&t=af0faf0a9c1d60507ada13cb60a37b62'},
  {id: 6, url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F68928c19a423124546cfcf43342958249cdced632b521-k1XF0c_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668319094&t=90520032c2782bf683e542ae51112953'},
  {id: 7, url: 'https://img0.baidu.com/it/u=3509278074,3810336214&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=706'},
  {id: 8, url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F13209289360%2F1000&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668319094&t=039dddf42c03855bb0fdd571df319732'},
  {id: 9, url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F6afced3f1cb0bb0bd3793dc30ed6853140289b4254c2-GxQ3cU_fw236&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668319094&t=adf0d66093cfa8269a006fc50d5b7f08'},
  {id: 10, url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F8856f411e648d4c1ba86cabd8fded3be05811b2c895b-ZWJ704_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668319094&t=9e5f29b536aebd58646c029c587a3da7'},
  {id: 11, url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201508%2F17%2F20150817091657_VPFGL.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668319190&t=2839aae0f1009acfb04bada1e5b5138d'},
  {id: 12, url: 'https://img2.baidu.com/it/u=3447211292,765601268&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=498'},
  {id: 13, url: 'https://img0.baidu.com/it/u=3916125574,3081239595&fm=253&fmt=auto&app=138&f=JPEG?w=567&h=500'},
  {id: 14, url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201307%2F23%2F20130723133009_frZYZ.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668319308&t=1e4de7947594092c6f840f4aea82b0c6'},
]

export default function Grid() {

  let [heightCollection, setHeightCollection] = useState([]);
  const [imageLoaded, setImageLoaded] = useState(false);

  const wrapperRef = useRef(null);

  useEffect(() => {
    
    const hc = []
    Array.from(wrapperRef.current.children).map((node, index) => {
      let img = node.querySelector('img');
      console.log(img.complete)
      if (img.complete) {
        let height = img.height;
        // console.log('complete', height);
        let span = parseInt(height / 20);
        let str = `auto / span ${span}`;
        hc[index] = str;
      } else {
        img.onload = () => {
          let height = img.height;
          // console.log('onload ', height)
          let span = parseInt(height / 20);
          let str = `auto / span ${span}`;
          hc[index] = str;
          setImageLoaded(true)
        }
      }
    })
    if (imageLoaded) {
      setHeightCollection(hc)
    }
  }, [imageLoaded])


  return (
    <div className='wrapper' ref={wrapperRef}>
      {
        source.map((item, index) => (
          <div className="item" key={item.id} style={{gridRow: heightCollection[index]}}>
            <img src={item.url}  alt=""/>
          </div>
        ))
      }
    </div>
  )
}