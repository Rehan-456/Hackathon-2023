import Image from 'next/image'
import Link from 'next/link'
 
export default function Card({blogs}){
    const blogList = blogs.map(blog => {
        return (
          <div className="row" key={blog.id}>
            <div className="col s12 m7">
              <div className="card pcard #e1f5fe light-blue lighten-5">
                <div className="card-image">
                  {/* <Image
                    
                    width={80}
                    height={80}
                  /> */}
                  <p className='#80d8ff light-blue accent-1'>{blog.email}</p>
                  <span className="">{blog.title}</span>
                </div>
                <div className="card-content #80d8ff light-blue accent-1">
                  <p >{blog.description}</p>
                </div>
              </div>
            </div>
          </div>
            )
        })
    return blogList
}