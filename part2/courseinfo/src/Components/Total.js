const Total = ({ course })=>{
    
    const newArr = course.parts.map(item => item.exercises)
  

    const totalSum = newArr.reduce((sum,currVal)=>{
        return sum+currVal
    },0)
    
    return(<div>
        <p><strong>Total of {totalSum} exercises</strong></p>
    </div>)
}

export default Total