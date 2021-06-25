import Part from './Part'
const Content = ({ course }) => {

    const elements = course.parts.map(item =><Part key={item.id} part={item}/>)
    return(<div>{elements}</div>)
}

export default Content