import Server from './server';

class API extends Server{
  /**
   *  用途：上传图片
   *  @url http://localhost:8001/v1/upload
   *  @method post
   *  @return {promise}
   */
  async uploadImg(params = {}){
    try{
      let result = await this.post('/v1/upload', params); 
      if(result && (result.data.data instanceof Object) && result.data.code === 1000){
        return result;
      }else{
        console.log(result.data.msg);
      }
    } catch(err){
      throw err;
    }
  }
  /**
   *  用途：登录
   *  @url http://localhost:8001/v1/login
   *  @method get
   *  @return {promise}
   */
  async login(params = {}){
    try{
      let result = await this.post('/v1/login', params); 
      if(result && (result.data instanceof Object) && result.data.code === 1000){
        return result.data.data||[];
      }else{
        console.log(result.data.msg);
      }
    } catch(err){
      throw err;
    }
  }
}
export default new API();