import React, { Fragment } from 'react'
import {  Popup, Card, Image }  from 'semantic-ui-react'


const CityCard =  (props) => {
	return (
	   <Popup
        content={props.city.description}
        header={`Triposo Rating: ${props.city.score.toFixed(2)}`}
        trigger={	<Card>
						<Image src={props.city.image}/>
						<Card.Content>
							<Card.Header>{props.city.name}</Card.Header>
							
						</Card.Content>
					</Card>	}
		inverted
		position='bottom right'
      />		
	
	)
}

export default CityCard