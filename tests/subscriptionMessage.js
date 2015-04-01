var request = require('supertest');
var assert = require('assert');
var conf = require('./testConfig');
request = request(conf.host);

var requestForm = {
	"cmd": "_notify-validate",
	"payer_id": "LKFFHSDJ76VY6",
	"address_country_code": "US",
	"btn_id": "3098368",
	"ipn_track_id": "57b3abf124b44",
	"address_zip": "95131",
	"charset": "windows-1252",
	"address_status": "confirmed",
	"address_street": "1 Main St",
	"verify_sign": "AiPC9BjkCyDFQXbSkoZcgqH3hpacABriemDkuLqayxXP82pySafvnbTx",
	"item_name": "Trend Analysis Premium",
	"test_ipn": "1",
	"subscr_date": "00:17:12 Mar 30, 2015 PDT",
	"txn_type": "subscr_signup",
	"mc_currency": "SGD",
	"reattempt": "1",
	"address_country": "United States",
	"payer_status": "verified",
	"first_name": "test",
	"address_name": "test buyer",
	"subscr_id": "I-JJ0PT5RUWLYV",
	"business": "henry.nguyen-seller-1@dataesp.net",
	"last_name": "buyer",
	"address_state": "CA",
	"recurring": "1",
	"resend": "true",
	"notify_version": "3.8",
	"period3": "1 M",
	"payer_email": "henry.nguyen-buyer-1@dataesp.net",
	"receiver_email": "henry.nguyen-seller-1@dataesp.net",
	"address_city": "San Jose",
	"mc_amount3": "300.00",
	"residence_country": "US"
}

describe('A new user subscribe to our plan', function(){
	it('POST will send a new IPN message to IPN listener', function(done){
		console.log('New subscription from user:', requestForm.payer_email);

		request.post('/')
			// format application/x-www-form-urlencoded
			.type('form')
			.send(requestForm)
			.expect(function(res){
				console.log('POST response body:' + JSON.stringify(res.body));
			})
			.expect(200, done);
	});

});





