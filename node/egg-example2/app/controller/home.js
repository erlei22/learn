const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    
    const ctx = this.ctx;
    const test1 = await ctx.curl(
      "https://polaris-api.16pinpin.com/shop_detail_charts?time_tag=30D&group_id=11276",
      {
        headers: {
          Topsession: "rosce88jr63465v484d4guskae"
        }
      }
    );

    
    this.ctx.body = 'hello egg.js';
  }
}

module.exports = HomeController;
