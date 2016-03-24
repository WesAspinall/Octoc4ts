import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

import{
  PhotoModel,
  PhotoCollection
} from './resources';

import{
  DetailsComponent,
  HeaderComponent,
  HomeComponent,
  UploadComponent,
  EditComponent,
  FooterComponent,
  DashboardComponent
} from './views';

export default Backbone.Router.extend({

    routes: {
    ''             : "redirectToHome",
    "home"         : "homeView",
    "details/:id"  : "getDetails",
    "upload"       : "upload",
    "edit/:id"     : "edit"
  },

  initialize(appElement) {

    this.el = appElement;
    this.collection = new PhotoCollection();
    this.model = new PhotoModel();
  },

  goto(route) {
    this.navigate(route, {
      trigger: true
    });
  },

  render(component){
    ReactDom.render(component, this.el);
  },

  redirectToHome() {
    this.navigate('home',{
      replace: true,
      trigger: true
    })
  },

    homeView(){
    this.collection.fetch().then(() =>{
    this.render(
      <wrap>
        <HeaderComponent
        onUploadClick={()=>this.goto('upload')}
        onHomeClick={()=>this.goto('home')}/>
        <DashboardComponent/>
        <HomeComponent
        onPhotoSelect ={(id) => 
        this.goto(`details/${id}`,{trigger: true})}
        photos={this.collection.toJSON()}/>
        <FooterComponent/>
      </wrap>
      );
    });
  },

    getDetails(id) {
    let image = this.collection.get(id);

    if (image) {
      this.render(
        <wrap>
        <HeaderComponent
         onUploadClick={()=>this.goto('upload')}
         onHomeClick={()=>this.goto('home')}/>
        <DetailsComponent
          details={image.toJSON()}
          onBackClick={() => this.goto('home')}
          onEditClick={() => this.goto(`edit/${id}`,{trigger: true})}
        />
        <FooterComponent/>
        </wrap>

      );
      
    } else {
      image = this.collection.add({objectId: id});
      image.fetch().then(() => {
        this.render(
        <wrap>
          <HeaderComponent
         onUploadClick={()=>this.goto('upload')}
         onHomeClick={()=>this.goto('home')}/>
          <DetailsComponent
            onBackClick={() => this.goto('home')}
            details={image.toJSON()}
            onEditClick={(id) => this.goto('edit/' + id)}
          />
           <FooterComponent/>
          </wrap>
        );
      });
    }
  },

    upload(){
      this.render(
        <wrap>
          <HeaderComponent
          onUploadClick={()=>this.goto('upload')}
          onHomeClick={()=>this.goto('home')}/>
          <UploadComponent
            onSubmitClick={(img)=> {
              let newAdd = new PhotoModel ({

                Img: img

              });
              newAdd.save().then(() => {
                this.goto('home');
              });

            }}/>
          <FooterComponent/>
        </wrap>
        )
    },

  edit(id) {
    let pizza = this.collection.get(id);
    this.render(
      <wrap>
      <HeaderComponent/>
      <EditComponent
        record={pizza.toJSON()}
        onBackClick={() => this.goto('details/' + id)}
        onSave={(Img) => this.saveForm(Img, id)}
      />
      <FooterComponent/>
      </wrap>
    )
      
  },

  saveForm(img, id) {
    this.collection.get(id).save({
      Img: img
    }).then(() => {
      this.goto('home');
    });
  },

    start() {
        Backbone.history.start();
        return this;
      },

});



