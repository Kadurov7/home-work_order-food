import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getMeals } from '../../store/mealsReducer/mealsReducer'
import MealItem from './meal-item/MealItem'


// const meals = [
//   {
//     id:'1',
//     title:'Sushi',
//     descreption:'Finest fish and veggies',
//     price: 22.99,
//   },
//   {
//     id:'2',
//     title:'Schnitzel',
//     descreption:'A german specialty!',
//     price:16.99,
//   },
//   {
//     id:'3',
//     title:'Barbecue Burger',
//     descreption:'American, raw, meaty',
//     price: 12.99,
//   },
//   {
//     id:'4',
//     title:'Green Bowl',
//     descreption:'Healthy...and green...',
//     price: 19.99,
//   },
// ]

const Meals = () => {

  const dispatch = useDispatch()

  const {meals, error, isLoading} = useSelector((state)=> state.meals);

  console.log(meals);
  
 useEffect(()=>{
    dispatch(getMeals())
 },[dispatch])
  

  return (
    <Card>
      {isLoading && !error && <p>loading</p>}
      {meals.map((item)=>(
         <MealItem key={item._id}
                   item={item}/>
      ))}
    </Card>
  )
}

export default Meals;

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 16px;
  width: 75%;
  padding: 40px 40px 36px 40px;
  margin: 40px auto;
`