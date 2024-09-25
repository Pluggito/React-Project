
const Testing= () => {
    const name = 'carew';
    const x = 10;
    const y = 30;
    const names = ['Brad','Joe','Hoe','Life']
    const animals = ['Cat', 'Dogs','Mouse','Chicken']
    const loggedIn = false;
    
    
      return (
        <>
        <div className='text-5xl'>App</div>
        <p style={{color: 'red', fontWeight: '300', fontSize: '50px' }}>Hello {name}</p>
        <p>
          The sum of {x} and {y} is {x + y}
        </p>
        <ul>
          {names.map((name, index)=>(
              <li key={index}>{name}</li>
          ))}
        </ul>
        <ul>
          {animals.map((animal, index)=>(
             <li key={index}>{animal}</li>
          ))}
        </ul>
       { loggedIn ? <h1>Hello Member</h1> : <h1>Hello Guest</h1>}
        
        </> 
      )
    
      
    };
    
    export default Testing;
    