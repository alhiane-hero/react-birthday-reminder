import './List_Style.css';

function List({people}) {

    const peopleList = people.map(person => {
        const {id, name, age, image} = person;
        return (
            <article key={id} className='Person'>
                <img src={image} alt={name} />
                <div className='PersonInfo'>
                    <h4>{name}</h4>
                    <p>{age} years</p>
                </div>
            </article>
        );
    })

    return (
        <>{peopleList}</>
    );
}

export default List;
