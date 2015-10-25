"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = require("./user.js");
var ServerPermissions = require("./ServerPermissions.js");
var EvaluatedPermissions = require("./EvaluatedPermissions.js");

var Member = (function (_User) {
	_inherits(Member, _User);

	function Member(user, server, roles) {
		_classCallCheck(this, Member);

		_User.call(this, user); // should work, we are basically creating a Member that has the same properties as user and a few more
		this.server = server;
		this.rawRoles = roles;
	}

	Member.prototype.permissionsIn = function permissionsIn(channel) {

		if (channel.server.ownerID === this.id) {
			return new EvaluatedPermissions(4294967295); //all perms
		}

		var affectingOverwrites = [];
		var affectingMemberOverwrites = [];

		for (var _iterator = channel.roles, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
			var _ref;

			if (_isArray) {
				if (_i >= _iterator.length) break;
				_ref = _iterator[_i++];
			} else {
				_i = _iterator.next();
				if (_i.done) break;
				_ref = _i.value;
			}

			var overwrite = _ref;

			if (overwrite.id === this.id && overwrite.type === "member") {
				affectingMemberOverwrites.push(overwrite);
			} else if (this.rawRoles.indexOf(overwrite.id) !== -1) {
				affectingOverwrites.push(overwrite);
			}
		}

		for (var _iterator2 = affectingOverwrites, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
			var _ref2;

			if (_isArray2) {
				if (_i2 >= _iterator2.length) break;
				_ref2 = _iterator2[_i2++];
			} else {
				_i2 = _iterator2.next();
				if (_i2.done) break;
				_ref2 = _i2.value;
			}

			var perm = _ref2;

			console.log("hey", perm.attachFiles);
		}

		if (affectingOverwrites.length === 0 && affectingMemberOverwrites.length === 0) {
			return new EvaluatedPermissions(this.evalPerms.packed);
		}

		var finalPacked = affectingOverwrites.length !== 0 ? affectingOverwrites[0].packed : affectingMemberOverwrites[0].packed;

		for (var _iterator3 = affectingOverwrites, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
			var _ref3;

			if (_isArray3) {
				if (_i3 >= _iterator3.length) break;
				_ref3 = _iterator3[_i3++];
			} else {
				_i3 = _iterator3.next();
				if (_i3.done) break;
				_ref3 = _i3.value;
			}

			var overwrite = _ref3;

			finalPacked = finalPacked & ~overwrite.deny;
			finalPacked = finalPacked | overwrite.allow;
		}

		for (var _iterator4 = affectingMemberOverwrites, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
			var _ref4;

			if (_isArray4) {
				if (_i4 >= _iterator4.length) break;
				_ref4 = _iterator4[_i4++];
			} else {
				_i4 = _iterator4.next();
				if (_i4.done) break;
				_ref4 = _i4.value;
			}

			var overwrite = _ref4;

			finalPacked = finalPacked & ~overwrite.deny;
			finalPacked = finalPacked | overwrite.allow;
		}

		return new EvaluatedPermissions(finalPacked);
	};

	_createClass(Member, [{
		key: "roles",
		get: function get() {

			var ufRoles = [this.server.getRole(this.server.id)];

			for (var _iterator5 = this.rawRoles, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
				var _ref5;

				if (_isArray5) {
					if (_i5 >= _iterator5.length) break;
					_ref5 = _iterator5[_i5++];
				} else {
					_i5 = _iterator5.next();
					if (_i5.done) break;
					_ref5 = _i5.value;
				}

				var rawRole = _ref5;

				ufRoles.push(this.server.getRole(rawRole));
			}

			return ufRoles;
		}
	}, {
		key: "evalPerms",
		get: function get() {
			var basePerms = this.roles,
			    //cache roles as it can be slightly expensive
			basePerm = basePerms[0].packed;

			for (var _iterator6 = basePerms, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
				var _ref6;

				if (_isArray6) {
					if (_i6 >= _iterator6.length) break;
					_ref6 = _iterator6[_i6++];
				} else {
					_i6 = _iterator6.next();
					if (_i6.done) break;
					_ref6 = _i6.value;
				}

				var perm = _ref6;

				basePerm = basePerm | perm.packed;
			}

			return new ServerPermissions({
				permissions: basePerm
			});
		}
	}]);

	return Member;
})(User);

module.exports = Member;