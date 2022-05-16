// Test.js
import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default () => {
    const [ message, setMessage ] = useState("Failure")
    useEffect(()=>{
        axios.get("http://localhost:8000/api")
            .then(res=>setMessage(res.data.message))       
    }, []);
    return (
        <div className='m-4'>
            <hr/>
            {/* <!-- Main container --> */}
            <nav class="level">
              {/* <!-- Left side --> */}
              <div class="level-right">
                <div class="level-item">
                  <p class="subtitle is-5">
                    <strong>123</strong> posts
                  </p>
                </div>
                <div class="level-item">
                  <div class="field has-addons">
                    <p class="control">
                      <input class="input" type="text" placeholder="Find a post"/>
                    </p>
                    <p class="control">
                      <button class="button">
                        Search
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            
              <div class="level-right">
                <p class="level-item"><strong>All</strong></p>
                <p class="level-item"><a>Published</a></p>
                <p class="level-item"><a>Drafts</a></p>
                <p class="level-item"><a>Deleted</a></p>
                <p class="level-item"><a class="button is-success">New</a></p>
              </div>
            </nav>
            <hr/>



            
            <button className='button is-primary is-large'> Butt</button>

            <div className="columns has-text-centered">
                <div className="column m-3 has-background-primary " >1</div>
                <div className="column m-3 has-background-primary">2</div>
                <div className="column m-3 has-background-primary">3</div>
                <div className="column m-3 has-background-primary">4</div>
                <div className="column m-3 has-background-primary">5</div>
            </div> 
            <div className="columns has-text-centered">
                <div className="column m-3 has-background-primary " >1</div>
                <div className="column m-3 has-background-primary">2</div>
                <div className="column m-3 has-background-primary">3</div>
                <div className="column m-3 has-background-primary">4</div>
            </div> 




            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Image"/>
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image"/>
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">John Smith</p>
                    <p class="subtitle is-6">@johnsmith</p>
                  </div>
                </div>
            
                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a>#css</a> <a>#responsive</a>
                  <br/>
                  <small>11:09 PM - 1 Jan 2016</small>
                </div>
              </div>
            </div>

        </div>
    )
}