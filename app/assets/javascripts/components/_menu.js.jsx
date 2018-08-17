class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewFruit = this.addNewFruit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.deleteFruit = this.deleteFruit.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateFruit = this.updateFruit.bind(this)
  }

  handleFormSubmit(name, description){
    let body = JSON.stringify({fruit: {name: name, description: description} })

    fetch('http://localhost:3000/api/v1/fruits', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then((response) => {return response.json()})
    .then((fruit)=>{
      this.addNewFruit(fruit)
    })
    
  }

  addNewFruit(fruit){
    this.setState({
      fruits: this.state.fruits.concat(fruit)
    })
  }

   handleDelete(id){
    fetch(`http://localhost:3000/api/v1/fruits/${id}`, 
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => { 
        this.deleteFruit(id)
      })
  }

  deleteFruit(id){
    newFruits = this.state.fruits.filter((fruit) => fruit.id !== id)
    this.setState({
      fruits: newFruits
    })
  }

  handleUpdate(fruit){
    fetch(`http://localhost:3000/api/v1/fruits/${fruit.id}`, 
    {
      method: 'PUT',
      body: JSON.stringify({fruit: fruit}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => { 
        this.updateFruit(fruit)
      })
  }
  updateFruit(fruit){
    let newFruits = this.state.fruits.filter((f) => f.id !== fruit.id)
    newFruits.push(fruit)
    this.setState({
      fruits: newFruits
    })
  }

  componentDidMount(){


    fetch('http://burger.zesty.site/-/custom/menulist.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ menu: data }) ; console.log(data)});
  }

  render(){
    return(
        <div>
       
<section className="site-section" id="section-menu">
	<div className="container">
		<div className="row">
			<div className="col-md-12 text-center mb-5 ">
				<h2 className="display-4">Menu</h2>
				<div className="row justify-content-center">
					<div className="col-md-7">
						<p className="lead">Want some food</p>
					</div>
				</div>
			</div>
			<div className="col-md-12 text-center">
				<ul className="nav site-tab-nav nav-pills mb-5" id="pills-tab" role="tablist">
        {this.state.menu.items && Object.keys(this.state.menu.items).map((cat, index) => {
          return (
            <li key={index} className="nav-item ">
              <a 
                className={(index == 0) ? "nav-link active" : "nav-link"}
                id={cat} 
                data-toggle="pill" 
                href={`#pills-${cat}`} 
                role="tab" 
                aria-controls={`pills-${cat}`} 
                aria-selected="true">
                  {cat}
                </a>
            </li>
          )
        }) }
					
				</ul>
				
				<div className="tab-content text-left">
					{this.state.menu.items && Object.values(this.state.menu).map((catItems, index1) => {
            console.log(catItems)
            return (
              <div key={index1}> {Object.keys(catItems).map((cat, index2) => {
                console.log(cat)
                return (
                  <div key={index2} className={`tab-pane fade ${(index2 == 0) ? "show active" : ""}`} id={`pills-${cat}`} role="tabpanel" aria-labelledby={`pills-${cat}-tab`}>
                  <div className="row">
                    { Object.values(catItems[cat]).map((item, index3) => 
                      {
                        console.log('wowza')
                        console.log(item)
                        return (
                          <div key={index3} className="col-md-6">
                              <div className="media menu-item div-link">
                                <a href="#"><span className="div-link-span"></span></a>
                                <img className="mr-3" src={item.image} className="img-fluid" alt=""/>
                                <div className="media-body">
                                  <h5 className="mt-0">{item.name} {
                                    item.tags && 
                                    item.tags.map((tag, index) => {
                                    return (<span key={index} className="tag">{tag}</span>)
                                      }) 
                                    }</h5>
                                  <p>{item.description}</p>
                                  <h6 className="text-primary menu-price">${item.price}</h6>
                                </div>
                              </div>
                            </div>
                        )                     
                      })
                    }
                  </div>
                </div> 
                )
              })
              }
              </div>
            )
          })}
					</div>
				
				
			</div>
			
		</div>
	</div>
</section>
      </div>
    )
  }
}