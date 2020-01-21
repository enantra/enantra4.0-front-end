import React, { Component } from 'react';
import Iframe from 'react-iframe';
import '../css/Accommodation.css';
import '../css/vendor/bootstrap.css';

class Accommodation extends Component{

    componentDidMount(){
        this.props.renderEvent(true);
    }
    render(){
        return(
            <div class="accommodation-background">
            <div class="container">
                <div class="centre-block">
                    <h1 class="heading-accommodation heading-accommodation center-block text-center">ACCOMMODATION</h1>
                </div>
                <div class="rules-accommodation row justify-content-center">
                    <div class='col-10'>
                        <h1 class="rules-heading-accommodation text-center">Rules and Regulations</h1>
                        <main class="fontchange-accommodation">
                        <br />1. Only non-Chennai participants will be provided accommodation services. Participants must
                        register online for availing our accommodation services.
                        <br />2. Registration for accommodation is not part of the Events registration, and is to be done
                        separately.
                        <br />3. Hospitality services will be available from 6 PM on 20th February, 2020 to 8 PM on 22nd
                        February, 2020.
                        <br />4. Accommodation will be provided on a sharing basis. Any requests for individual rooms will
                        not be entertained. However, we will try to accommodate students from the same college together in
                        rooms and dorms (if possible).
                        <br />5. Services will be offered on "First Register First Serve" basis.
                        <br />6. Accommodated students can have their food at their own expense in canteens and food stalls
                        that are available. Food will not be provided by Team Enantra.
                        <br />7. Mattresses and buckets will be provided. However, participants are encouraged to carry their
                        own blankets since it is the month of February and nights might be cold.
                        <br />8. Random checks will be made to avoid any illegal stay in the campus. Any participant failing
                        to produce his/her Accommodation Receipt will be fined and disqualified.
                        <br />9. Participants are responsible for their belongings during their stay. Neither Team Enantra
                        nor the institute will take responsibility for any loss of property incurred.
                        <br />10. In-time is 8.30 PM.
                        <br />11. Hospitality team has the right to cancel or wait-list accommodation while processing your
                        request.
                        <br />12. Smoking and drinking is strictly prohibited inside the campus.
                        <br />13. Any act of misbehaviour inside the campus will be severely dealt with, leading to the
                        immediate expulsion of the team (in question) from the campus and cancellation of registration.
                        <br />14. Any damage caused by the participants to institute property during their stay will result
                        in forfeiture of the caution deposit and/or recovery of the amount due to the damage (whichever is
                        higher)
                        <br /><br />
                        For queries email us at <em>hospitality.enantra@gmail.com</em>
                      </main>
                    </div>
                </div>
                <div class="rules-accommodation row justify-content-center">
                    <div class='col-10'>
                        <hr class="rules-lining-accommodation"/>
                        <h1 class="rules-heading-accommodation text-center">Directions</h1>
                        <hr class="rules-lining-accommodation"/>
                        <h3 class="rules-heading-accommodation text-center">From Chennai Central</h3><br/>
                        <h4 class="rules-accommodation-subheading">BY BUS</h4><br/>
                        <main class="fontchange-accommodation">
                        <ul>
                        <li>Board 19G opposite to the railway station and ask for Anna
                        University/Gandhi Mandapam. This bus is not that frequent.
                        <br/></li>
                        <li>Board PP21(during 4 am to 7 am) at the bus stop just outside
                        the railway station and ask for Anna University/Gandhi
                        Mandapam. This bus is of very low frequency.
                        <br/></li>
                        <li>Board 15B,15G,15F at the central bus stop and reach Broadway
                        Bus Stand. Board 21G (or) 21L from Broadway to Anna
                        University. The buses are very frequent here and it is
                        the recommended mode of reaching the University from Central.
                        </li>
                        </ul>
                        </main>
                        <br/>
                        <br/><h4 class="rules-accommodation-subheading">BY TRAIN</h4><br/>
                        <main class="fontchange-accommodation">
                        <ul>   
                        <li>
                        There is no direct train to Anna University. You have to reach
                        Guindy and then board a bus to Anna University.
                        <br/></li>
                        <li>Trains to Guindy depart from the Park Railway Station opposite
                        to the Chennai Central Railway Station.
                        <br/></li>
                        <li>Step out of the Guindy Railway Station (by taking a right in the
                        crossover meant for pedestrians) and cross the road using the
                        subway. Right near the subway, you&apos;ll find a lane toward the right
                        side wherein you can find the bus stop. Board M21G, 21G, PP21,
                        M19, M49, 54F, 577, 549 and get down at Anna University.
                        <br/></li>
                        <li>You&apos;ll also find share autos to Anna University near the subway
                        which would cost you Rs. 20.
                        <br/></li>
                        </ul>
                        </main>
                        <br/><h4 class="rules-accommodation-subheading">BY CAB</h4><br/>
                        <main class="fontchange-accommodation">
                        <ul>    
                        <li>
                        In case you have too much luggage, try Auto or Taxi. You can
                        also avail the facility of prepaid auto service. The fare will be
                        around Rs.160.
                        <br/></li>
                        <li>State the destination as &quot;Anna University Kotturpuram Gate&quot;.</li>
                        </ul>
                        <br/><br/>
                        </main>
                        <h3 class="rules-heading-accommodation text-center">From Egmore Railway Station</h3>
                        <br/><h4 class="rules-accommodation-subheading">BY BUS</h4><br/>
                        <main class="fontchange-accommodation">
                        <ul>
                        <li>In Egmore, near Pantheon Road and Haals Road junction, you
                        can get 23C and the frequency of this bus is high. Travel time
                        might be 45-50 minutes.</li>
                        <br/>
                        </ul>    
                        </main>
                        <br/><h4 class="rules-accommodation-subheading">BY TRAIN</h4><br/>
                        <main class="fontchange-accommodation">
                        <ul>
                        <li>You can take the Electric train to Guindy. Step out of the Guindy
                        Railway Station (by taking a right in the crossover meant for
                        pedestrians) and cross the road using the subway. Right near the
                        subway you&apos;ll find a lane towards the right side wherein you can
                        find the bus stop. Board M21G, 21G, PP21, M19, M49, 54F, 577,
                        549 and get down at Anna University.
                        </li><br/>
                        <li>You&apos;ll also find share autos to Anna University near the subway
                        which would cost you Rs.20.
                        </li><br/><br/>
                        </ul>
                        </main>
                        <h3 class="rules-heading-accommodation text-center">From Koyambedu/CMBT</h3><br/><br/>
                        <main class="fontchange-accommodation">
                        <ul>
                        <li>CMBT expands as Chennai Moffusil Bus Terminus. A lot of
                        buses are available either directly to Anna University or
                        indirectly via T. Nagar or Guindy.
                        </li><br/>
                        <li>Board bus 23M, PP49, T70, and 149 which are direct to
                        Anna University. These buses are not so frequent.
                        </li><br/>
                        <li>Board bus to T.Nagar (27C, M27) and from there get 5B,
                        19C, 19B, 47, 47A, 47D to Anna University.
                        </li><br/>
                        <li>You can use the metro to travel Guindy from Koyambedu, it
                        takes only 15 minutes.
                        </li><br/>
                        <li>Board bus to Guindy(M70, M70D, B70, C70, D70, M170C,170C)and then board buses are M21G, 21G, PP21, M19,M49, 54F, 577, 549 from Guindy to Anna University. Or you can take a share auto to Anna University from Guindy bus stop which you can pay only 20 rupees. This is most recommended since these buses are very frequent.
                        </li>
                        </ul>
                        </main>
                        <br/><br/><h3 class="rules-heading-accommodation text-center">From Perungalathur</h3><br/><br/>
                        <main class="fontchange-accommodation">
                        <ul>   
                        <li>For persons from southern districts of Tamil Nadu, since the
                        buses take the Bypass road to CMBT after 6 am, you cannot
                        get down at the Kathipara junction.
                        </li><br/>
                        <li>Rather you can get down at Perungalathur and board 577 or
                        PP21 to Anna University. These buses are not frequent.
                        </li><br/>
                        <li>You can travel to Guindy from the Perungalathur by using
                        the buses 549,M79.
                       </li><br/>
                       <li>You may also take a train to Guindy from the Perungalathur
                       junction just behind the bus stop and and then board M21G,
                       21G, PP21, M19, M49, 54F, 577, 549 from Guindy to Anna
                       University. Or you can take a share auto from Guindy bus
                       stop to Anna University which would cost you Rs. 20.
                       </li>
                       </ul>
                      </main>
                    </div>
                </div>
                <div class="map-style">
                <Iframe url="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d15549.629443129923!2d80.235047!3d13.009711!3m2!1i1024!2i768!4f13.1!2m1!1sCollege+of+Engineering+Guindy!5e0!3m2!1sen!2sus!4v1546923503883"
                    width="90%" height="400px" frameBorder="0" style="border:0" allowFullScreen>
                </Iframe>
                </div>    
            </div>
        </div>
    )
    }    
}

export default Accommodation;