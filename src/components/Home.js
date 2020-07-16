import React, { Component } from 'react'

class Home extends Component{
    render(){
        return(
            <div style={{width:"100wh",}}>
                <div class="home center align-items-cente justify-content-center" style={{height:"100vh",background:"white"}}>
               <center> <h2 className="black-text animate__animated animate__fadeIn">CET Disaster Management Cell</h2>
                <h6 className="black-text">An Initiative by
                College Union 2020</h6>
                <a href="" class="fa fa-facebook"></a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="" class="fa fa-instagram"></a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="" class="fa fa-google"></a></center>
                </div>
<div className="mycontainer laptop">
                <div class="row mainrow">
                    <div class="col maincol s12">
                        <p>                                                              
                        If we look back at the past few years; floods that struck us twice, the lives it took from us, our homes it pulled to the earth and now, the virus that has locked us all in, spreading all over the world with no regrets while all we can do is mourn for the dead and feel helpless and live in terror/agony as the toll spikes day by day.
                        </p>
                    </div>
                    <div className="col center s6 mainimage">
                        <center><img src="https://media.mehrnews.com/d/2019/02/27/3/3059911.jpg" width="50%"></img></center>
                    </div>
                </div>
                <div class="row mainrow">
                
                <div className="col center s6 mainimage">
                <center><img src="https://miro.medium.com/max/7680/1*C51FyB82wHdzRTgEIsYKPw.jpeg" width="50%"></img></center>
                </div>
                <div class="col s18  maincol">
                    
                    <p>No doubt,we are not prepared enough. But it's never too late to begin .So come join us as we introduce..........as a humble effort to create a better informed and prepared society.
                    </p>
                </div>

            </div>
            </div>


<div class="mycontainer-m mobile">
<div>                <center><img src="https://miro.medium.com/max/7680/1*C51FyB82wHdzRTgEIsYKPw.jpeg" width="100%" style={{'margin-bottom':"15px"}}></img></center>
</div>
            <div><p>                                                              
            If we look back at the past few years; floods that struck us twice, the lives it took from us, our homes it pulled to the earth and now, the virus that has locked us all in, spreading all over the world with no regrets while all we can do is mourn for the dead and feel helpless and live in terror/agony as the toll spikes day by day.
            </p></div>
<div>  <center><img src="https://media.mehrnews.com/d/2019/02/27/3/3059911.jpg" width="100%"  style={{'margin-bottom':"15px"}}></img></center>
</div>

<div><p>No doubt,we are not prepared enough. But it's never too late to begin .So come join us as we introduce..........as a humble effort to create a better informed and prepared society.
</p></div>
</div>

            </div>
        )
    }
}

export default Home;