import React from 'react';

import { Wrapper } from './TicketInfo-css';

const TicketInfo = ({props}) => {
    return (
        <Wrapper>
            <div className='from-to'>
                <div className='posi-div'>
                    <p className='posi-p'>
                        {
                            props.from.pos[0]
                        }
                        <span>
                            {
                                props.from.pos[1]
                            }
                        </span>
                    </p>
                    <p className='data-p'>
                        {
                            props.from.date
                        }
                    </p>
                </div>
                <img alt='img'></img>
                <div className='posi-div'>
                    <p className='posi-p'>
                        {
                            props.to.pos[0]
                        }
                        <span>
                            {
                                props.to.pos[1]
                            }
                        </span>
                    </p>
                    <p className='data-p'>
                        {
                            props.from.date
                        }
                    </p>
                </div>
            </div>
            <div className='for-type'>
                <p>
                    Travel time: {props.travel_time.for}
                </p>
                <span>
                    {
                        props.travel_time.plane
                    }
                </span>
            </div>
            <div className='show-price'>
                <p> Show price </p>
                <p> ${props.price} </p>
                <p> {'per passenger'} </p>
            </div>
        </Wrapper>
    )
}



export default TicketInfo;