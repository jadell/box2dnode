/**
 * Copyright 2010 Josh Adell. All rights reserved.
 *
 * Based on Box2d2 -  Jonas Wagner
 *   http://29a.ch/2010/4/17/box2d-2-flash-ported-javascript
 *
 * This software is provided 'as-is', without any express or
 * implied warranty. In no event will the authors be held liable 
 * for any damages arising from the use of this software.
 *
 * Permission is granted to anyone to use this software for any purpose, 
 * including commercial applications, and to alter it and redistribute 
 * it freely, subject to the following restrictions:
 *
 *    1. The origin of this software must not be misrepresented; you 
 *       must not claim that you wrote the original software. If you 
 *       use this software in a product, an acknowledgment in the product 
 *       documentation would be appreciated but is not required.
 *
 *    2. Altered source versions must be plainly marked as such, and must 
 *       not be misrepresented as being the original software.
 *
 *    3. This notice may not be removed or altered from any source 
 *       distribution.
 */

function extend(a, b) {
    for(var c in b) {
        a[c] = b[c];
    }
}


var b2Settings = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2Settings.prototype.__constructor = function(){}
b2Settings.prototype.__varz = function(){
}
b2Settings.USHRT_MAX =  0x0000ffff;
b2Settings.b2_pi =  Math.PI;
b2Settings.b2_maxManifoldPoints =  2;
b2Settings.b2_maxPolygonVertices =  8;
b2Settings.b2_maxProxies =  512;
b2Settings.b2_maxPairs =  8 * b2Settings.b2_maxProxies;
b2Settings.b2_linearSlop =  0.005;
b2Settings.b2_angularSlop =  2.0 / 180.0 * b2Settings.b2_pi;
b2Settings.b2_toiSlop =  8.0 * b2Settings.b2_linearSlop;
b2Settings.b2_maxTOIContactsPerIsland =  32;
b2Settings.b2_velocityThreshold =  1.0;
b2Settings.b2_maxLinearCorrection =  0.2;
b2Settings.b2_maxAngularCorrection =  8.0 / 180.0 * b2Settings.b2_pi;
b2Settings.b2_maxLinearVelocity =  200.0;
b2Settings.b2_maxLinearVelocitySquared =  b2Settings.b2_maxLinearVelocity * b2Settings.b2_maxLinearVelocity;
b2Settings.b2_maxAngularVelocity =  250.0;
b2Settings.b2_maxAngularVelocitySquared =  b2Settings.b2_maxAngularVelocity * b2Settings.b2_maxAngularVelocity;
b2Settings.b2_contactBaumgarte =  0.2;
b2Settings.b2_timeToSleep =  0.5;
b2Settings.b2_linearSleepTolerance =  0.01;
b2Settings.b2_angularSleepTolerance =  2.0 / 180.0;
b2Settings.b2Assert = function (a) {
		if (!a){
			var nullVec;
			nullVec.x++;
		}
	}
exports.b2Settings = b2Settings;


var b2Color = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2Color.prototype.__constructor = function (rr, gg, bb) {
		this._r = parseInt(255 * b2Math.b2Clamp(rr, 0.0, 1.0));
		this._g = parseInt(255 * b2Math.b2Clamp(gg, 0.0, 1.0));
		this._b = parseInt(255 * b2Math.b2Clamp(bb, 0.0, 1.0));
	}
b2Color.prototype.__varz = function(){
}
b2Color.prototype._r =  0;
b2Color.prototype._g =  0;
b2Color.prototype._b =  0;
b2Color.prototype.Set = function (rr, gg, bb) {
		this._r = parseInt(255 * b2Math.b2Clamp(rr, 0.0, 1.0));
		this._g = parseInt(255 * b2Math.b2Clamp(gg, 0.0, 1.0));
		this._b = parseInt(255 * b2Math.b2Clamp(bb, 0.0, 1.0));
	}
b2Color.prototype.set = function (rr) {
		this._r = parseInt(255 * b2Math.b2Clamp(rr, 0.0, 1.0));
	}
b2Color.prototype.set = function (gg) {
		this._g = parseInt(255 * b2Math.b2Clamp(gg, 0.0, 1.0));
	}
b2Color.prototype.set = function (bb) {
		this._b = parseInt(255 * b2Math.b2Clamp(bb, 0.0, 1.0));
	}
b2Color.prototype.get = function () {
		return (this._r) | (this._g << 8) | (this._b << 16);
	}
exports.b2Color = b2Color;


var b2Vec2 = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2Vec2.prototype.__constructor = function (x_, y_) {
    if(arguments.length == 2) {
        this.x=x_; this.y=y_;
    }
}
b2Vec2.prototype.__varz = function(){
}
b2Vec2.Make = function (x_, y_) {
		return new b2Vec2(x_, y_);
	}
b2Vec2.prototype.x =  0;
b2Vec2.prototype.y =  0;
b2Vec2.prototype.SetZero = function () { this.x = 0.0; this.y = 0.0; }
b2Vec2.prototype.Set = function (x_, y_) {this.x=x_; this.y=y_;}
b2Vec2.prototype.SetV = function (v) {this.x=v.x; this.y=v.y;}
b2Vec2.prototype.Negative = function () { return new b2Vec2(-this.x, -this.y); }
b2Vec2.prototype.Copy = function () {
		return new b2Vec2(this.x,this.y);
	}
b2Vec2.prototype.Add = function (v) {
		this.x += v.x; this.y += v.y;
	}
b2Vec2.prototype.Subtract = function (v) {
		this.x -= v.x; this.y -= v.y;
	}
b2Vec2.prototype.Multiply = function (a) {
		this.x *= a; this.y *= a;
	}
b2Vec2.prototype.MulM = function (A) {
		var tX = this.x;
		this.x = A.col1.x * tX + A.col2.x * this.y;
		this.y = A.col1.y * tX + A.col2.y * this.y;
	}
b2Vec2.prototype.MulTM = function (A) {
		var tX = b2Math.b2Dot(this, A.col1);
		this.y = b2Math.b2Dot(this, A.col2);
		this.x = tX;
	}
b2Vec2.prototype.CrossVF = function (s) {
		var tX = this.x;
		this.x = s * this.y;
		this.y = -s * tX;
	}
b2Vec2.prototype.CrossFV = function (s) {
		var tX = this.x;
		this.x = -s * this.y;
		this.y = s * tX;
	}
b2Vec2.prototype.MinV = function (b) {
		this.x = this.x < b.x ? this.x : b.x;
		this.y = this.y < b.y ? this.y : b.y;
	}
b2Vec2.prototype.MaxV = function (b) {
		this.x = this.x > b.x ? this.x : b.x;
		this.y = this.y > b.y ? this.y : b.y;
	}
b2Vec2.prototype.Abs = function () {
		if (this.x < 0) this.x = -this.x;
		if (this.y < 0) this.y = -this.y;
	}
b2Vec2.prototype.Length = function () {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
b2Vec2.prototype.LengthSquared = function () {
		return (this.x * this.x + this.y * this.y);
	}
b2Vec2.prototype.Normalize = function () {
		var length = Math.sqrt(this.x * this.x + this.y * this.y);
		if (length < Number.MIN_VALUE)
		{
			return 0.0;
		}
		var invLength = 1.0 / length;
		this.x *= invLength;
		this.y *= invLength;
		
		return length;
	}
b2Vec2.prototype.IsValid = function () {
		return b2Math.b2IsValid(this.x) && b2Math.b2IsValid(this.y);
	}
exports.b2Vec2 = b2Vec2;


var b2Mat22 = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2Mat22.prototype.__constructor = function (angle, c1, c2) {
		if (c1!=null && c2!=null){
			this.col1.SetV(c1);
			this.col2.SetV(c2);
		}
		else{
			var c = Math.cos(angle);
			var s = Math.sin(angle);
			this.col1.x = c; this.col2.x = -s;
			this.col1.y = s; this.col2.y = c;
		}
	}
b2Mat22.prototype.__varz = function(){
this.col1 =  new b2Vec2();
this.col2 =  new b2Vec2();
}
b2Mat22.prototype.col1 =  new b2Vec2();
b2Mat22.prototype.col2 =  new b2Vec2();
b2Mat22.prototype.Set = function (angle) {
		var c = Math.cos(angle);
		var s = Math.sin(angle);
		this.col1.x = c; this.col2.x = -s;
		this.col1.y = s; this.col2.y = c;
	}
b2Mat22.prototype.SetVV = function (c1, c2) {
		this.col1.SetV(c1);
		this.col2.SetV(c2);
	}
b2Mat22.prototype.Copy = function () {
		return new b2Mat22(0, this.col1, this.col2);
	}
b2Mat22.prototype.SetM = function (m) {
		this.col1.SetV(m.col1);
		this.col2.SetV(m.col2);
	}
b2Mat22.prototype.AddM = function (m) {
		this.col1.x += m.col1.x;
		this.col1.y += m.col1.y;
		this.col2.x += m.col2.x;
		this.col2.y += m.col2.y;
	}
b2Mat22.prototype.SetIdentity = function () {
		this.col1.x = 1.0; this.col2.x = 0.0;
		this.col1.y = 0.0; this.col2.y = 1.0;
	}
b2Mat22.prototype.SetZero = function () {
		this.col1.x = 0.0; this.col2.x = 0.0;
		this.col1.y = 0.0; this.col2.y = 0.0;
	}
b2Mat22.prototype.GetAngle = function () {
		return Math.atan2(this.col1.y, this.col1.x);
	}
b2Mat22.prototype.Invert = function (out) {
		var a = this.col1.x; 
		var b = this.col2.x; 
		var c = this.col1.y; 
		var d = this.col2.y;
		
		var det = a * d - b * c;
		
		det = 1.0 / det;
		out.col1.x = det * d;	out.col2.x = -det * b;
		out.col1.y = -det * c;	out.col2.y = det * a;
		return out;
	}
b2Mat22.prototype.Solve = function (out, bX, bY) {
		
		var a11 = this.col1.x;
		var a12 = this.col2.x;
		var a21 = this.col1.y;
		var a22 = this.col2.y;
		
		var det = a11 * a22 - a12 * a21;
		
		det = 1.0 / det;
		out.x = det * (a22 * bX - a12 * bY);
		out.y = det * (a11 * bY - a21 * bX);
		
		return out;
	}
b2Mat22.prototype.Abs = function () {
		this.col1.Abs();
		this.col2.Abs();
	}
exports.b2Mat22 = b2Mat22;


var b2XForm = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2XForm.prototype.__constructor = function (pos, r) {
		if (pos){
			this.position.SetV(pos);
			this.R.SetM(r);

		}
	}
b2XForm.prototype.__varz = function(){
this.position =  new b2Vec2;
this.R =  new b2Mat22();
}
b2XForm.prototype.position =  new b2Vec2;
b2XForm.prototype.R =  new b2Mat22();
b2XForm.prototype.Initialize = function (pos, r) {
		this.position.SetV(pos);
		this.R.SetM(r);
	}
b2XForm.prototype.SetIdentity = function () {
		this.position.SetZero();
		this.R.SetIdentity();
	}
b2XForm.prototype.Set = function (x) {

		this.position.SetV(x.position);

		this.R.SetM(x.R);

	}
exports.b2XForm = b2XForm;
	
	
var b2Math = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2Math.prototype.__constructor = function(){}
b2Math.prototype.__varz = function(){
}
b2Math.b2Vec2_zero =  new b2Vec2(0.0, 0.0);
b2Math.b2Mat22_identity =  new b2Mat22(0, new b2Vec2(1.0, 0.0), new b2Vec2(0.0, 1.0));
b2Math.b2XForm_identity =  new b2XForm(b2Math.b2Vec2_zero, b2Math.b2Mat22_identity);
b2Math.b2IsValid = function (x) {
		return isFinite(x);
	}
b2Math.b2Dot = function (a, b) {
		return a.x * b.x + a.y * b.y;
	}
b2Math.b2CrossVV = function (a, b) {
		return a.x * b.y - a.y * b.x;
	}
b2Math.b2CrossVF = function (a, s) {
		var v = new b2Vec2(s * a.y, -s * a.x);
		return v;
	}
b2Math.b2CrossFV = function (s, a) {
		var v = new b2Vec2(-s * a.y, s * a.x);
		return v;
	}
b2Math.b2MulMV = function (A, v) {
		
		
		var u = new b2Vec2(A.col1.x * v.x + A.col2.x * v.y, A.col1.y * v.x + A.col2.y * v.y);
		return u;
	}
b2Math.b2MulTMV = function (A, v) {
		
		
		var u = new b2Vec2(b2Math.b2Dot(v, A.col1), b2Math.b2Dot(v, A.col2));
		return u;
	}
b2Math.b2MulX = function (T, v) {
		var a = b2Math.b2MulMV(T.R, v);
		a.x += T.position.x;
		a.y += T.position.y;
		
		return a;
	}
b2Math.b2MulXT = function (T, v) {
		var a = b2Math.SubtractVV(v, T.position);
		
		var tX = (a.x * T.R.col1.x + a.y * T.R.col1.y );
		a.y = (a.x * T.R.col2.x + a.y * T.R.col2.y );
		a.x = tX;
		return a;
	}
b2Math.AddVV = function (a, b) {
		var v = new b2Vec2(a.x + b.x, a.y + b.y);
		return v;
	}
b2Math.SubtractVV = function (a, b) {
		var v = new b2Vec2(a.x - b.x, a.y - b.y);
		return v;
	}
b2Math.b2Distance = function (a, b) {
		var cX = a.x-b.x;
		var cY = a.y-b.y;
		return Math.sqrt(cX*cX + cY*cY);
	}
b2Math.b2DistanceSquared = function (a, b) {
		var cX = a.x-b.x;
		var cY = a.y-b.y;
		return (cX*cX + cY*cY);
	}
b2Math.MulFV = function (s, a) {
		var v = new b2Vec2(s * a.x, s * a.y);
		return v;
	}
b2Math.AddMM = function (A, B) {
		var C = new b2Mat22(0, b2Math.AddVV(A.col1, B.col1), b2Math.AddVV(A.col2, B.col2));
		return C;
	}
b2Math.b2MulMM = function (A, B) {
		var C = new b2Mat22(0, b2Math.b2MulMV(A, B.col1), b2Math.b2MulMV(A, B.col2));
		return C;
	}
b2Math.b2MulTMM = function (A, B) {
		var c1 = new b2Vec2(b2Math.b2Dot(A.col1, B.col1), b2Math.b2Dot(A.col2, B.col1));
		var c2 = new b2Vec2(b2Math.b2Dot(A.col1, B.col2), b2Math.b2Dot(A.col2, B.col2));
		var C = new b2Mat22(0, c1, c2);
		return C;
	}
b2Math.b2Abs = function (a) {
		return a > 0.0 ? a : -a;
	}
b2Math.b2AbsV = function (a) {
		var b = new b2Vec2(b2Math.b2Abs(a.x), b2Math.b2Abs(a.y));
		return b;
	}
b2Math.b2AbsM = function (A) {
		var B = new b2Mat22(0, b2Math.b2AbsV(A.col1), b2Math.b2AbsV(A.col2));
		return B;
	}
b2Math.b2Min = function (a, b) {
		return a < b ? a : b;
	}
b2Math.b2MinV = function (a, b) {
		var c = new b2Vec2(b2Math.b2Min(a.x, b.x), b2Math.b2Min(a.y, b.y));
		return c;
	}
b2Math.b2Max = function (a, b) {
		return a > b ? a : b;
	}
b2Math.b2MaxV = function (a, b) {
		var c = new b2Vec2(b2Math.b2Max(a.x, b.x), b2Math.b2Max(a.y, b.y));
		return c;
	}
b2Math.b2Clamp = function (a, low, high) {
		return b2Math.b2Max(low, b2Math.b2Min(a, high));
	}
b2Math.b2ClampV = function (a, low, high) {
		return b2Math.b2MaxV(low, b2Math.b2MinV(a, high));
	}
b2Math.b2Swap = function (a, b) {
		var tmp = a[0];
		a[0] = b[0];
		b[0] = tmp;
	}
b2Math.b2Random = function () {
		return Math.random() * 2 - 1;
	}
b2Math.b2RandomRange = function (lo, hi) {
		var r = Math.random();
		r = (hi - lo) * r + lo;
		return r;
	}
b2Math.b2NextPowerOfTwo = function (x) {
		x |= (x >> 1) & 0x7FFFFFFF;
		x |= (x >> 2) & 0x3FFFFFFF;
		x |= (x >> 4) & 0x0FFFFFFF;
		x |= (x >> 8) & 0x00FFFFFF;
		x |= (x >> 16)& 0x0000FFFF;
		return x + 1;
	}
b2Math.b2IsPowerOfTwo = function (x) {
		var result = x > 0 && (x & (x - 1)) == 0;
		return result;
	}
exports.b2Math = b2Math;


var b2Sweep = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2Sweep.prototype.__constructor = function(){}
b2Sweep.prototype.__varz = function(){
this.localCenter =  new b2Vec2();
this.c0 =  new b2Vec2;
this.c =  new b2Vec2();
}
b2Sweep.prototype.localCenter =  new b2Vec2();
b2Sweep.prototype.c0 =  new b2Vec2;
b2Sweep.prototype.c =  new b2Vec2();
b2Sweep.prototype.a0 =  null;
b2Sweep.prototype.a =  null;
b2Sweep.prototype.t0 =  null;
b2Sweep.prototype.GetXForm = function (xf, t) {
		
		
		if (1.0 - this.t0 > Number.MIN_VALUE)
		{
			var alpha = (t - this.t0) / (1.0 - this.t0);
			xf.position.x = (1.0 - alpha) * this.c0.x + alpha * this.c.x;
			xf.position.y = (1.0 - alpha) * this.c0.y + alpha * this.c.y;
			var angle = (1.0 - alpha) * this.a0 + alpha * this.a;
			xf.R.Set(angle);
		}
		else
		{
			xf.position.SetV(this.c);
			xf.R.Set(this.a);
		}
		
		
		
		var tMat = xf.R;
		xf.position.x -= (tMat.col1.x * this.localCenter.x + tMat.col2.x * this.localCenter.y);
		xf.position.y -= (tMat.col1.y * this.localCenter.x + tMat.col2.y * this.localCenter.y);
		
	}
b2Sweep.prototype.Advance = function (t) {
		if (this.t0 < t && 1.0 - this.t0 > Number.MIN_VALUE)
		{
			var alpha = (t - this.t0) / (1.0 - this.t0);
			
			this.c0.x = (1.0 - alpha) * this.c0.x + alpha * this.c.x;
			this.c0.y = (1.0 - alpha) * this.c0.y + alpha * this.c.y;
			this.a0 = (1.0 - alpha) * this.a0 + alpha * this.a;
			this.t0 = t;
		}
	}
exports.b2Sweep = b2Sweep;
	

var b2Pair = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2Pair.prototype.__constructor = function(){}
b2Pair.prototype.__varz = function(){
}
b2Pair.b2_nullPair =  b2Settings.USHRT_MAX;
b2Pair.b2_nullProxy =  b2Settings.USHRT_MAX;
b2Pair.b2_tableCapacity =  b2Settings.b2_maxPairs;
b2Pair.b2_tableMask =  b2Pair.b2_tableCapacity - 1;
b2Pair.e_pairBuffered =  0x0001;
b2Pair.e_pairRemoved =  0x0002;
b2Pair.e_pairFinal =  0x0004;
b2Pair.prototype.userData =  null;
b2Pair.prototype.proxyId1 =  0;
b2Pair.prototype.proxyId2 =  0;
b2Pair.prototype.next =  0;
b2Pair.prototype.status =  0;
b2Pair.prototype.SetBuffered = function () { this.status |= b2Pair.e_pairBuffered; }
b2Pair.prototype.ClearBuffered = function () { this.status &= ~b2Pair.e_pairBuffered; }
b2Pair.prototype.IsBuffered = function () { return (this.status & b2Pair.e_pairBuffered) == b2Pair.e_pairBuffered; }
b2Pair.prototype.SetRemoved = function () { this.status |= b2Pair.e_pairRemoved; }
b2Pair.prototype.ClearRemoved = function () { this.status &= ~b2Pair.e_pairRemoved; }
b2Pair.prototype.IsRemoved = function () { return (this.status & b2Pair.e_pairRemoved) == b2Pair.e_pairRemoved; }
b2Pair.prototype.SetFinal = function () { this.status |= b2Pair.e_pairFinal; }
b2Pair.prototype.IsFinal = function () { return (this.status & b2Pair.e_pairFinal) == b2Pair.e_pairFinal; }
exports.b2Pair = b2Pair;


var b2PairCallback = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2PairCallback.prototype.__constructor = function(){}
b2PairCallback.prototype.__varz = function(){
}
b2PairCallback.prototype.PairAdded = function (proxyUserData1, proxyUserData2) {return null}
b2PairCallback.prototype.PairRemoved = function (proxyUserData1, proxyUserData2, pairUserData) {}
exports.b2PairCallback = b2PairCallback;


var b2PairManager = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2PairManager.prototype.__constructor = function () {
		var i = 0;
		
		
		this.m_hashTable = new Array(b2Pair.b2_tableCapacity);
		for (i = 0; i < b2Pair.b2_tableCapacity; ++i)
		{
			this.m_hashTable[i] = b2Pair.b2_nullPair;
		}
		this.m_pairs = new Array(b2Settings.b2_maxPairs);
		for (i = 0; i < b2Settings.b2_maxPairs; ++i)
		{
			this.m_pairs[i] = new b2Pair();
		}
		this.m_pairBuffer = new Array(b2Settings.b2_maxPairs);
		for (i = 0; i < b2Settings.b2_maxPairs; ++i)
		{
			this.m_pairBuffer[i] = new b2BufferedPair();
		}
		
		for (i = 0; i < b2Settings.b2_maxPairs; ++i)
		{
			this.m_pairs[i].proxyId1 = b2Pair.b2_nullProxy;
			this.m_pairs[i].proxyId2 = b2Pair.b2_nullProxy;
			this.m_pairs[i].userData = null;
			this.m_pairs[i].status = 0;
			this.m_pairs[i].next = (i + 1);
		}
		this.m_pairs[parseInt(b2Settings.b2_maxPairs-1)].next = b2Pair.b2_nullPair;
		this.m_pairCount = 0;
		this.m_pairBufferCount = 0;
	}
b2PairManager.prototype.__varz = function(){
}
b2PairManager.Hash = function (proxyId1, proxyId2) {
		var key = ((proxyId2 << 16) & 0xffff0000) | proxyId1;
		key = ~key + ((key << 15) & 0xFFFF8000);
		key = key ^ ((key >> 12) & 0x000fffff);
		key = key + ((key << 2) & 0xFFFFFFFC);
		key = key ^ ((key >> 4) & 0x0fffffff);
		key = key * 2057;
		key = key ^ ((key >> 16) % 65535);
		return key;
	}
b2PairManager.Equals = function (pair, proxyId1, proxyId2) {
		return (pair.proxyId1 == proxyId1 && pair.proxyId2 == proxyId2);
	}
b2PairManager.EqualsPair = function (pair1, pair2) {
		return pair1.proxyId1 == pair2.proxyId1 && pair1.proxyId2 == pair2.proxyId2;
	}
b2PairManager.prototype.m_broadPhase =  null;
b2PairManager.prototype.m_callback =  null;
b2PairManager.prototype.m_pairs =  null;
b2PairManager.prototype.m_freePair =  0;
b2PairManager.prototype.m_pairCount =  0;
b2PairManager.prototype.m_pairBuffer =  null;
b2PairManager.prototype.m_pairBufferCount =  0;
b2PairManager.prototype.m_hashTable =  null;
b2PairManager.prototype.AddPair = function (proxyId1, proxyId2) {
		
		if (proxyId1 > proxyId2){
			var temp = proxyId1;
			proxyId1 = proxyId2;
			proxyId2 = temp;
			
		}
		
		var hash = b2PairManager.Hash(proxyId1, proxyId2) & b2Pair.b2_tableMask;
		
		
		var pair = pair = this.FindHash(proxyId1, proxyId2, hash);
		
		if (pair != null)
		{
			return pair;
		}
		
		
		
		var pIndex = this.m_freePair;
		pair = this.m_pairs[pIndex];
		this.m_freePair = pair.next;
		
		pair.proxyId1 = proxyId1;
		pair.proxyId2 = proxyId2;
		pair.status = 0;
		pair.userData = null;
		pair.next = this.m_hashTable[hash];
		
		this.m_hashTable[hash] = pIndex;
		
		++this.m_pairCount;
		
		return pair;
	}
b2PairManager.prototype.RemovePair = function (proxyId1, proxyId2) {
		var pair;
		
		
		
		if (proxyId1 > proxyId2){
			var temp = proxyId1;
			proxyId1 = proxyId2;
			proxyId2 = temp;
			
		}
		
		var hash = b2PairManager.Hash(proxyId1, proxyId2) & b2Pair.b2_tableMask;
		
		var node = this.m_hashTable[hash];
		var pNode = null;
		
		while (node != b2Pair.b2_nullPair)
		{
			if (b2PairManager.Equals(this.m_pairs[node], proxyId1, proxyId2))
			{
				var index = node;
				
				
				pair = this.m_pairs[node];
				if (pNode){
					pNode.next = pair.next;
				}
				else{
					this.m_hashTable[hash] = pair.next;
				}
				
				pair = this.m_pairs[ index ];
				var userData = pair.userData;
				
				
				pair.next = this.m_freePair;
				pair.proxyId1 = b2Pair.b2_nullProxy;
				pair.proxyId2 = b2Pair.b2_nullProxy;
				pair.userData = null;
				pair.status = 0;
				
				this.m_freePair = index;
				--this.m_pairCount;
				return userData;
			}
			else
			{
				
				pNode = this.m_pairs[node];
				node = pNode.next;
			}
		}
		
		
		return null;
	}
b2PairManager.prototype.Find = function (proxyId1, proxyId2) {
		
		if (proxyId1 > proxyId2){
			var temp = proxyId1;
			proxyId1 = proxyId2;
			proxyId2 = temp;
			
		}
		
		var hash = b2PairManager.Hash(proxyId1, proxyId2) & b2Pair.b2_tableMask;
		
		return this.FindHash(proxyId1, proxyId2, hash);
	}
b2PairManager.prototype.FindHash = function (proxyId1, proxyId2, hash) {
		var pair;
		var index = this.m_hashTable[hash];
		
		pair = this.m_pairs[index];
		while( index != b2Pair.b2_nullPair && b2PairManager.Equals(pair, proxyId1, proxyId2) == false)
		{
			index = pair.next;
			pair = this.m_pairs[index];
		}
		
		if ( index == b2Pair.b2_nullPair )
		{
			return null;
		}
		
		
		
		return pair;
	}
b2PairManager.prototype.ValidateBuffer = function () {
		
	}
b2PairManager.prototype.ValidateTable = function () {
		
	}
b2PairManager.prototype.Initialize = function (broadPhase, callback) {
		this.m_broadPhase = broadPhase;
		this.m_callback = callback;
	}
b2PairManager.prototype.AddBufferedPair = function (proxyId1, proxyId2) {
		var bufferedPair;
		
		
		
		var pair = this.AddPair(proxyId1, proxyId2);
		
		
		if (pair.IsBuffered() == false)
		{
			
			
			
			
			pair.SetBuffered();
			bufferedPair = this.m_pairBuffer[this.m_pairBufferCount];
			bufferedPair.proxyId1 = pair.proxyId1;
			bufferedPair.proxyId2 = pair.proxyId2;
			++this.m_pairBufferCount;
			
			
		}
		
		
		pair.ClearRemoved();
		
		if (b2BroadPhase.s_validate)
		{
			this.ValidateBuffer();
		}
	}
b2PairManager.prototype.RemoveBufferedPair = function (proxyId1, proxyId2) {
		var bufferedPair;
		
		
		
		
		var pair = this.Find(proxyId1, proxyId2);
		
		if (pair == null)
		{
			
			return;
		}
		
		
		if (pair.IsBuffered() == false)
		{
			
			
			
			pair.SetBuffered();
			bufferedPair = this.m_pairBuffer[this.m_pairBufferCount];
			bufferedPair.proxyId1 = pair.proxyId1;
			bufferedPair.proxyId2 = pair.proxyId2;
			++this.m_pairBufferCount;
			
			
		}
		
		pair.SetRemoved();
		
		if (b2BroadPhase.s_validate)
		{
			this.ValidateBuffer();
		}
	}
b2PairManager.prototype.Commit = function () {
		var bufferedPair;
		var i = 0;
		
		var removeCount = 0;
		
		var proxies = this.m_broadPhase.m_proxyPool;
		
		for (i = 0; i < this.m_pairBufferCount; ++i)
		{
			bufferedPair = this.m_pairBuffer[i];
			var pair = this.Find(bufferedPair.proxyId1, bufferedPair.proxyId2);
			
			pair.ClearBuffered();
			
			
			
			var proxy1 = proxies[ pair.proxyId1 ];
			var proxy2 = proxies[ pair.proxyId2 ];
			
			
			
			
			if (pair.IsRemoved())
			{
				
				
				
				if (pair.IsFinal() == true)
				{
					this.m_callback.PairRemoved(proxy1.userData, proxy2.userData, pair.userData);
				}
				
				
				bufferedPair = this.m_pairBuffer[removeCount];
				bufferedPair.proxyId1 = pair.proxyId1;
				bufferedPair.proxyId2 = pair.proxyId2;
				++removeCount;
			}
			else
			{
				
				
				if (pair.IsFinal() == false)
				{
					pair.userData = this.m_callback.PairAdded(proxy1.userData, proxy2.userData);
					pair.SetFinal();
				}
			}
		}
		
		for (i = 0; i < removeCount; ++i)
		{
			bufferedPair = this.m_pairBuffer[i]
			this.RemovePair(bufferedPair.proxyId1, bufferedPair.proxyId2);
		}
		
		this.m_pairBufferCount = 0;
		
		if (b2BroadPhase.s_validate)
		{
			this.ValidateTable();
		}	
	}
exports.b2PairManager = b2PairManager;
	
	
var b2BufferedPair = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2BufferedPair.prototype.__constructor = function(){}
b2BufferedPair.prototype.__varz = function(){
}
b2BufferedPair.prototype.proxyId1 =  0;
b2BufferedPair.prototype.proxyId2 =  0;
exports.b2BufferedPair = b2BufferedPair;
	

var b2AABB = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2AABB.prototype.__constructor = function(){}
b2AABB.prototype.__varz = function(){
this.lowerBound =  new b2Vec2();
this.upperBound =  new b2Vec2();
}
b2AABB.prototype.lowerBound =  new b2Vec2();
b2AABB.prototype.upperBound =  new b2Vec2();
b2AABB.prototype.IsValid = function () {
		
		var dX = this.upperBound.x - this.lowerBound.x;
		var dY = this.upperBound.y - this.lowerBound.y;
		var valid = dX >= 0.0 && dY >= 0.0;
		valid = valid && this.lowerBound.IsValid() && this.upperBound.IsValid();
		return valid;
	}
exports.b2AABB = b2AABB;
	
	
var b2Manifold = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2Manifold.prototype.__constructor = function () {
		this.points = new Array(b2Settings.b2_maxManifoldPoints);
		for (var i = 0; i < b2Settings.b2_maxManifoldPoints; i++){
			this.points[i] = new b2ManifoldPoint();
		}
		this.normal = new b2Vec2();
	}
b2Manifold.prototype.__varz = function(){
}
b2Manifold.prototype.points =  null;
b2Manifold.prototype.normal =  null;
b2Manifold.prototype.pointCount =  0;
b2Manifold.prototype.Reset = function () {
		for (var i = 0; i < b2Settings.b2_maxManifoldPoints; i++){
			(this.points[i]).Reset();
		}
		this.normal.SetZero();
		this.pointCount = 0;
	}
b2Manifold.prototype.Set = function (m) {
		this.pointCount = m.pointCount;
		for (var i = 0; i < b2Settings.b2_maxManifoldPoints; i++){
			(this.points[i]).Set(m.points[i]);
		}
		this.normal.SetV(m.normal);
	}	
exports.b2Manifold = b2Manifold;


var Features = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
Features.prototype = {
    get referenceEdge() {
        return this._referenceEdge;
    },
    set referenceEdge(value) {
		this._referenceEdge = value;
		this._m_id._key = (this._m_id._key & 0xffffff00) | (this._referenceEdge & 0x000000ff);
    },
    get incidentEdge() {
        return this._incidentEdge;
    },
    set incidentEdge(value) {
		this._incidentEdge = value;
		this._m_id._key = (this._m_id._key & 0xffff00ff) | ((this._incidentEdge << 8) & 0x0000ff00);
    },
    set incidentVertex(value) {
		this._incidentVertex = value;
		this._m_id._key = (this._m_id._key & 0xff00ffff) | ((this._incidentVertex << 16) & 0x00ff0000);
    },
    get incidentVertex() {
        return this._incidentVertex;
    },
    set flip(value) {
		this._flip = value;
		this._m_id._key = (this._m_id._key & 0x00ffffff) | ((this._flip << 24) & 0xff000000);
    },
    get flip() {
        return this._flip;
    }
}
Features.prototype.__constructor = function(){}
Features.prototype.__varz = function(){
}
Features.prototype._referenceEdge =  0;
Features.prototype._incidentEdge =  0;
Features.prototype._incidentVertex =  0;
Features.prototype._flip =  0;
Features.prototype._m_id =  null;
exports.Features = Features;


var b2ContactID = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2ContactID.prototype = {
    get key() {
        return this._key;
    },
    set key(value) {
		this._key = value;
		this.features._referenceEdge = this._key & 0x000000ff;
		this.features._incidentEdge = ((this._key & 0x0000ff00) >> 8) & 0x000000ff;
		this.features._incidentVertex = ((this._key & 0x00ff0000) >> 16) & 0x000000ff;
		this.features._flip = ((this._key & 0xff000000) >> 24) & 0x000000ff;
    }
}
b2ContactID.prototype.__constructor = function () {
		this.features._m_id = this;
}
b2ContactID.prototype.__varz = function(){
    this.features =  new Features();
}
b2ContactID.prototype.features =  new Features();
b2ContactID.prototype._key =  0;
b2ContactID.prototype.Set = function (id) {
    this.key = id._key;
}
b2ContactID.prototype.Copy = function () {
    var id = new b2ContactID();
    id.key = this._key;
    return id;
}
exports.b2ContactID = b2ContactID;


var b2ManifoldPoint = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2ManifoldPoint.prototype.__constructor = function(){}
b2ManifoldPoint.prototype.__varz = function(){
this.localPoint1 =  new b2Vec2();
this.localPoint2 =  new b2Vec2();
this.id =  new b2ContactID();
}
b2ManifoldPoint.prototype.localPoint1 =  new b2Vec2();
b2ManifoldPoint.prototype.localPoint2 =  new b2Vec2();
b2ManifoldPoint.prototype.separation =  null;
b2ManifoldPoint.prototype.normalImpulse =  null;
b2ManifoldPoint.prototype.tangentImpulse =  null;
b2ManifoldPoint.prototype.id =  new b2ContactID();
b2ManifoldPoint.prototype.Reset = function () {
		this.localPoint1.SetZero();
		this.localPoint2.SetZero();
		this.separation = 0.0;
		this.normalImpulse = 0.0;
		this.tangentImpulse = 0.0;
		this.id.key = 0;
	}
b2ManifoldPoint.prototype.Set = function (m) {
		this.localPoint1.SetV(m.localPoint1);
		this.localPoint2.SetV(m.localPoint2);
		this.separation = m.separation;
		this.normalImpulse = m.normalImpulse;
		this.tangentImpulse = m.tangentImpulse;
		this.id.key = m.id.key;
	}
exports.b2ManifoldPoint = b2ManifoldPoint;
	
	
var b2Point = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2Point.prototype.__constructor = function(){}
b2Point.prototype.__varz = function(){
this.p =  new b2Vec2();
}
b2Point.prototype.p =  new b2Vec2();
b2Point.prototype.Support = function (xf, vX, vY) {
		return this.p;
	}
b2Point.prototype.GetFirstVertex = function (xf) {
		return this.p;
	}
exports.b2Point = b2Point;
	
	
var b2Bound = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2Bound.prototype.__constructor = function(){}
b2Bound.prototype.__varz = function(){
}
b2Bound.prototype.value =  0;
b2Bound.prototype.proxyId =  0;
b2Bound.prototype.stabbingCount =  0;
b2Bound.prototype.IsLower = function () { return (this.value & 1) == 0; }
b2Bound.prototype.IsUpper = function () { return (this.value & 1) == 1; }
b2Bound.prototype.Swap = function (b) {
		var tempValue = this.value;
		var tempProxyId = this.proxyId;
		var tempStabbingCount = this.stabbingCount;
		
		this.value = b.value;
		this.proxyId = b.proxyId;
		this.stabbingCount = b.stabbingCount;
		
		b.value = tempValue;
		b.proxyId = tempProxyId;
		b.stabbingCount = tempStabbingCount;
	}
exports.b2Bound = b2Bound;
	
	
var b2BoundValues = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2BoundValues.prototype.__constructor = function(){}
b2BoundValues.prototype.__varz = function(){
this.lowerValues =  [0,0];
this.upperValues =  [0,0];
}
b2BoundValues.prototype.lowerValues =  [0,0];
b2BoundValues.prototype.upperValues =  [0,0];
exports.b2BoundValues = b2BoundValues;


var b2Collision = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2Collision.prototype.__constructor = function(){}
b2Collision.prototype.__varz = function(){
}
b2Collision.b2_nullFeature =  0x000000ff;
b2Collision.b2CollidePolyTempVec =  new b2Vec2();
b2Collision.ClipSegmentToLine = function (vOut, vIn, normal, offset) {
		var cv;
		
		
		var numOut = 0;
		
		cv = vIn[0];
		var vIn0 = cv.v;
		cv = vIn[1];
		var vIn1 = cv.v;
		
		
		var distance0 = b2Math.b2Dot(normal, vIn0) - offset;
		var distance1 = b2Math.b2Dot(normal, vIn1) - offset;
		
		
		if (distance0 <= 0.0) vOut[numOut++] = vIn[0];
		if (distance1 <= 0.0) vOut[numOut++] = vIn[1];
		
		
		if (distance0 * distance1 < 0.0)
		{
			
			var interp = distance0 / (distance0 - distance1);
			
			
			cv = vOut[numOut];
			var tVec = cv.v;
			tVec.x = vIn0.x + interp * (vIn1.x - vIn0.x);
			tVec.y = vIn0.y + interp * (vIn1.y - vIn0.y);
			cv = vOut[numOut];
			var cv2;
			if (distance0 > 0.0)
			{
				cv2 = vIn[0];
				cv.id = cv2.id;
			}
			else
			{
				cv2 = vIn[1];
				cv.id = cv2.id;
			}
			++numOut;
		}
		
		return numOut;
	}
b2Collision.EdgeSeparation = function (	poly1, xf1, edge1, 
											poly2, xf2) {
		var count1 = poly1.m_vertexCount;
		var vertices1 = poly1.m_vertices;
		var normals1 = poly1.m_normals;
		
		var count2 = poly2.m_vertexCount;
		var vertices2 = poly2.m_vertices;
		
		
		
		var tMat;
		var tVec;
		
		
		
		tMat = xf1.R;
		tVec = normals1[edge1];
		var normal1WorldX = (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
		var normal1WorldY = (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
		
		tMat = xf2.R;
		var normal1X = (tMat.col1.x * normal1WorldX + tMat.col1.y * normal1WorldY);
		var normal1Y = (tMat.col2.x * normal1WorldX + tMat.col2.y * normal1WorldY);
		
		
		var index = 0;
		var minDot = Number.MAX_VALUE;
		for (var i = 0; i < count2; ++i)
		{
			
			tVec = vertices2[i];
			var dot = tVec.x * normal1X + tVec.y * normal1Y;
			if (dot < minDot)
			{
				minDot = dot;
				index = i;
			}
		}
		
		
		tVec = vertices1[edge1];
		tMat = xf1.R;
		var v1X = xf1.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
		var v1Y = xf1.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
		
		tVec = vertices2[index];
		tMat = xf2.R;
		var v2X = xf2.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
		var v2Y = xf2.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
		
		
		v2X -= v1X;
		v2Y -= v1Y;
		
		var separation = v2X * normal1WorldX + v2Y * normal1WorldY;
		return separation;
	}
b2Collision.FindMaxSeparation = function (edgeIndex , 
											poly1, xf1, 
											poly2, xf2) {
		var count1 = poly1.m_vertexCount;
		var normals1 = poly1.m_normals;
		
		var tVec;
		var tMat;
		
		
		
		tMat = xf2.R;
		tVec = poly2.m_centroid;
		var dX = xf2.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
		var dY = xf2.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
		tMat = xf1.R;
		tVec = poly1.m_centroid;
		dX -= xf1.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
		dY -= xf1.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
		
		
		var dLocal1X = (dX * xf1.R.col1.x + dY * xf1.R.col1.y);
		var dLocal1Y = (dX * xf1.R.col2.x + dY * xf1.R.col2.y);
		
		
		var edge = 0;
		var maxDot = -Number.MAX_VALUE;
		for (var i = 0; i < count1; ++i)
		{
			
			tVec = normals1[i];
			var dot = (tVec.x * dLocal1X + tVec.y * dLocal1Y);
			if (dot > maxDot)
			{
				maxDot = dot;
				edge = i;
			}
		}
		
		
		var s = b2Collision.EdgeSeparation(poly1, xf1, edge, poly2, xf2);
		if (s > 0.0)
		{
			return s;
		}
		
		
		var prevEdge = edge - 1 >= 0 ? edge - 1 : count1 - 1;
		var sPrev = b2Collision.EdgeSeparation(poly1, xf1, prevEdge, poly2, xf2);
		if (sPrev > 0.0)
		{
			return sPrev;
		}
		
		
		var nextEdge = edge + 1 < count1 ? edge + 1 : 0;
		var sNext = b2Collision.EdgeSeparation(poly1, xf1, nextEdge, poly2, xf2);
		if (sNext > 0.0)
		{
			return sNext;
		}
		
		
		var bestEdge = 0;
		var bestSeparation;
		var increment = 0;
		if (sPrev > s && sPrev > sNext)
		{
			increment = -1;
			bestEdge = prevEdge;
			bestSeparation = sPrev;
		}
		else if (sNext > s)
		{
			increment = 1;
			bestEdge = nextEdge;
			bestSeparation = sNext;
		}
		else
		{
			
			edgeIndex[0] = edge;
			return s;
		}
		
		
		while (true)
		{
			
			if (increment == -1)
				edge = bestEdge - 1 >= 0 ? bestEdge - 1 : count1 - 1;
			else
				edge = bestEdge + 1 < count1 ? bestEdge + 1 : 0;
			
			s = b2Collision.EdgeSeparation(poly1, xf1, edge, poly2, xf2);
			if (s > 0.0)
			{
				return s;
			}
			
			if (s > bestSeparation)
			{
				bestEdge = edge;
				bestSeparation = s;
			}
			else
			{
				break;
			}
		}
		
		
		edgeIndex[0] = bestEdge;
		return bestSeparation;
	}
b2Collision.FindIncidentEdge = function (c, 
											poly1, xf1, edge1, 
											poly2, xf2) {
		var count1 = poly1.m_vertexCount;
		var normals1 = poly1.m_normals;
		
		var count2 = poly2.m_vertexCount;
		var vertices2 = poly2.m_vertices;
		var normals2 = poly2.m_normals;
		
		
		
		var tMat;
		var tVec;
		
		
		
		tMat = xf1.R;
		tVec = normals1[edge1];
		var normal1X = (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
		var normal1Y = (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
		tMat = xf2.R;
		var tX = (tMat.col1.x * normal1X + tMat.col1.y * normal1Y);
		normal1Y = 		(tMat.col2.x * normal1X + tMat.col2.y * normal1Y);
		normal1X = tX;
		
		
		var index = 0;
		var minDot = Number.MAX_VALUE;
		for (var i = 0; i < count2; ++i)
		{
			
			tVec = normals2[i];
			var dot = (normal1X * tVec.x + normal1Y * tVec.y);
			if (dot < minDot)
			{
				minDot = dot;
				index = i;
			}
		}
		
		var tClip;
		
		var i1 = index;
		var i2 = i1 + 1 < count2 ? i1 + 1 : 0;
		
		tClip = c[0];
		
		tVec = vertices2[i1];
		tMat = xf2.R;
		tClip.v.x = xf2.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
		tClip.v.y = xf2.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
		
		tClip.id.features.referenceEdge = edge1;
		tClip.id.features.incidentEdge = i1;
		tClip.id.features.incidentVertex = 0;
		
		tClip = c[1];
		
		tVec = vertices2[i2];
		tMat = xf2.R;
		tClip.v.x = xf2.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
		tClip.v.y = xf2.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
		
		tClip.id.features.referenceEdge = edge1;
		tClip.id.features.incidentEdge = i2;
		tClip.id.features.incidentVertex = 1;
	}
b2Collision.b2CollidePolygons = function (manifold, 
											polyA, xfA,
											polyB, xfB) {
		var cv;
		
		manifold.pointCount = 0;

		var edgeA = 0;
		var edgeAO = [edgeA];
		var separationA = b2Collision.FindMaxSeparation(edgeAO, polyA, xfA, polyB, xfB);
		edgeA = edgeAO[0];
		if (separationA > 0.0)
			return;

		var edgeB = 0;
		var edgeBO = [edgeB];
		var separationB = b2Collision.FindMaxSeparation(edgeBO, polyB, xfB, polyA, xfA);
		edgeB = edgeBO[0];
		if (separationB > 0.0)
			return;

		var poly1;	
		var poly2;	
		var xf1 = new b2XForm();
		var xf2 = new b2XForm();
		var edge1 = 0;		
		var flip = 0;
		var k_relativeTol = 0.98;
		var k_absoluteTol = 0.001;

		
		if (separationB > k_relativeTol * separationA + k_absoluteTol)
		{
			poly1 = polyB;
			poly2 = polyA;
			xf1.Set(xfB);
			xf2.Set(xfA);
			edge1 = edgeB;
			flip = 1;
		}
		else
		{
			poly1 = polyA;
			poly2 = polyB;
			xf1.Set(xfA);
			xf2.Set(xfB);
			edge1 = edgeA;
			flip = 0;
		}

		var incidentEdge = [new ClipVertex(), new ClipVertex()];
		b2Collision.FindIncidentEdge(incidentEdge, poly1, xf1, edge1, poly2, xf2);

		var count1 = poly1.m_vertexCount;
		var vertices1 = poly1.m_vertices;

		var tVec = vertices1[edge1];
		var v11 = tVec.Copy();
		if (edge1 + 1 < count1) {
			tVec = vertices1[parseInt(edge1+1)];
			var v12 = tVec.Copy();
		} else {
			tVec = vertices1[0];
			v12 = tVec.Copy();
		}

		var dv = b2Math.SubtractVV(v12 , v11);
		var sideNormal = b2Math.b2MulMV(xf1.R, b2Math.SubtractVV(v12 , v11));
		sideNormal.Normalize();
		var frontNormal = b2Math.b2CrossVF(sideNormal, 1.0);
		
		v11 = b2Math.b2MulX(xf1, v11);
		v12 = b2Math.b2MulX(xf1, v12);

		var frontOffset = b2Math.b2Dot(frontNormal, v11);
		var sideOffset1 = -b2Math.b2Dot(sideNormal, v11);
		var sideOffset2 = b2Math.b2Dot(sideNormal, v12);

		
		var clipPoints1 = [new ClipVertex(), new ClipVertex()];
		var clipPoints2 = [new ClipVertex(), new ClipVertex()];
		var np = 0;

		
		
		np = b2Collision.ClipSegmentToLine(clipPoints1, incidentEdge, sideNormal.Negative(), sideOffset1);

		if (np < 2)
			return;

		
		np = b2Collision.ClipSegmentToLine(clipPoints2, clipPoints1, sideNormal, sideOffset2);

		if (np < 2)
			return;

		
		manifold.normal = flip ? frontNormal.Negative() : frontNormal.Copy();

		var pointCount = 0;
		for (var i = 0; i < b2Settings.b2_maxManifoldPoints; ++i)
		{
			cv = clipPoints2[i];
			var separation = b2Math.b2Dot(frontNormal, cv.v) - frontOffset;

			if (separation <= 0.0)
			{
				var cp = manifold.points[ pointCount ];
				cp.separation = separation;
				cp.localPoint1 = b2Math.b2MulXT(xfA, cv.v);
				cp.localPoint2 = b2Math.b2MulXT(xfB, cv.v);
				cp.id.key = cv.id._key;
				cp.id.features.flip = flip;
				++pointCount;
			}
		}

		manifold.pointCount = pointCount;
	}
b2Collision.b2CollideCircles = function (
		manifold, 
		circle1, xf1, 
		circle2, xf2) {
		manifold.pointCount = 0;
		
		var tMat;
		var tVec;
		
		
		tMat = xf1.R; tVec = circle1.m_localPosition;
		var p1X = xf1.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
		var p1Y = xf1.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
		
		tMat = xf2.R; tVec = circle2.m_localPosition;
		var p2X = xf2.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
		var p2Y = xf2.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
		
		var dX = p2X - p1X;
		var dY = p2Y - p1Y;
		
		var distSqr = dX * dX + dY * dY;
		var r1 = circle1.m_radius;
		var r2 = circle2.m_radius;
		var radiusSum = r1 + r2;
		if (distSqr > radiusSum * radiusSum)
		{
			return;
		}
		
		var separation;
		if (distSqr < Number.MIN_VALUE)
		{
			separation = -radiusSum;
			manifold.normal.Set(0.0, 1.0);
		}
		else
		{
			var dist = Math.sqrt(distSqr);
			separation = dist - radiusSum;
			var a = 1.0 / dist;
			manifold.normal.x = a * dX;
			manifold.normal.y = a * dY;
		}
		
		manifold.pointCount = 1;
		var tPoint = manifold.points[0];
		tPoint.id.key = 0;
		tPoint.separation = separation;
		
		p1X += r1 * manifold.normal.x;
		p1Y += r1 * manifold.normal.y;
		p2X -= r2 * manifold.normal.x;
		p2Y -= r2 * manifold.normal.y;
		
		
		var pX = 0.5 * (p1X + p2X);
		var pY = 0.5 * (p1Y + p2Y);
		
		
		var tX = pX - xf1.position.x;
		var tY = pY - xf1.position.y;
		tPoint.localPoint1.x = (tX * xf1.R.col1.x + tY * xf1.R.col1.y );
		tPoint.localPoint1.y = (tX * xf1.R.col2.x + tY * xf1.R.col2.y );
		
		tX = pX - xf2.position.x;
		tY = pY - xf2.position.y;
		tPoint.localPoint2.x = (tX * xf2.R.col1.x + tY * xf2.R.col1.y );
		tPoint.localPoint2.y = (tX * xf2.R.col2.x + tY * xf2.R.col2.y );
	}
b2Collision.b2CollidePolygonAndCircle = function (
		manifold, 
		polygon, xf1,
		circle, xf2) {
		manifold.pointCount = 0;
		var tPoint;
		
		var dX;
		var dY;
		var positionX;
		var positionY;
		
		var tVec;
		var tMat;
		
		
		
		tMat = xf2.R;
		tVec = circle.m_localPosition;
		var cX = xf2.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
		var cY = xf2.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
		
		
		dX = cX - xf1.position.x;
		dY = cY - xf1.position.y;
		tMat = xf1.R;
		var cLocalX = (dX * tMat.col1.x + dY * tMat.col1.y);
		var cLocalY = (dX * tMat.col2.x + dY * tMat.col2.y);
		
		var dist;
		
		
		var normalIndex = 0;
		var separation = -Number.MAX_VALUE;
		var radius = circle.m_radius;
		var vertexCount = polygon.m_vertexCount;
		var vertices = polygon.m_vertices;
		var normals = polygon.m_normals;

		for (var i = 0; i < vertexCount; ++i)
		{
			
			tVec = vertices[i];
			dX = cLocalX-tVec.x;
			dY = cLocalY-tVec.y;
			tVec = normals[i];
			var s = tVec.x * dX + tVec.y * dY;
			
			if (s > radius)
			{
				
				return;
			}
			
			if (s > separation)
			{
				separation = s;
				normalIndex = i;
			}
		}
		
		
		if (separation < Number.MIN_VALUE)
		{
			manifold.pointCount = 1;
			
			tVec = normals[normalIndex];
			tMat = xf1.R;
			manifold.normal.x = (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
			manifold.normal.y = (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
			
			tPoint = manifold.points[0];
			tPoint.id.features.incidentEdge = normalIndex;
			tPoint.id.features.incidentVertex = b2Collision.b2_nullFeature;
			tPoint.id.features.referenceEdge = 0;
			tPoint.id.features.flip = 0;
			
			positionX = cX - radius * manifold.normal.x;
			positionY = cY - radius * manifold.normal.y;
			
			dX = positionX - xf1.position.x;
			dY = positionY - xf1.position.y;
			tMat = xf1.R;
			tPoint.localPoint1.x = (dX*tMat.col1.x + dY*tMat.col1.y);
			tPoint.localPoint1.y = (dX*tMat.col2.x + dY*tMat.col2.y);
			
			dX = positionX - xf2.position.x;
			dY = positionY - xf2.position.y;
			tMat = xf2.R;
			tPoint.localPoint2.x = (dX*tMat.col1.x + dY*tMat.col1.y);
			tPoint.localPoint2.y = (dX*tMat.col2.x + dY*tMat.col2.y);
			
			tPoint.separation = separation - radius;
			return;
		}
		
		
		var vertIndex1 = normalIndex;
		var vertIndex2 = vertIndex1 + 1 < vertexCount ? vertIndex1 + 1 : 0;
		tVec = vertices[vertIndex1];
		var tVec2 = vertices[vertIndex2];
		
		var eX = tVec2.x - tVec.x;
		var eY = tVec2.y - tVec.y;
		
		
		var length = Math.sqrt(eX*eX + eY*eY);
		eX /= length;
		eY /= length;
		
		
		
		
		dX = cLocalX - tVec.x;
		dY = cLocalY - tVec.y;
		var u = dX*eX + dY*eY;
		
		tPoint = manifold.points[0];
		
		var pX, pY;
		if (u <= 0.0)
		{
			pX = tVec.x;
			pY = tVec.y;
			tPoint.id.features.incidentEdge = b2Collision.b2_nullFeature;
			tPoint.id.features.incidentVertex = vertIndex1;
		}
		else if (u >= length)
		{
			pX = tVec2.x;
			pY = tVec2.y;
			tPoint.id.features.incidentEdge = b2Collision.b2_nullFeature;
			tPoint.id.features.incidentVertex = vertIndex2;
		}
		else
		{
			
			pX = eX * u + tVec.x;
			pY = eY * u + tVec.y;
			tPoint.id.features.incidentEdge = normalIndex;
			tPoint.id.features.incidentVertex = b2Collision.b2_nullFeature;
		}
		
		
		dX = cLocalX - pX;
		dY = cLocalY - pY;
		
		dist = Math.sqrt(dX*dX + dY*dY);
		dX /= dist;
		dY /= dist;
		if (dist > radius)
		{
			return;
		}
		
		manifold.pointCount = 1;
		
		tMat = xf1.R;
		manifold.normal.x = tMat.col1.x * dX + tMat.col2.x * dY;
		manifold.normal.y = tMat.col1.y * dX + tMat.col2.y * dY;
		
		positionX = cX - radius * manifold.normal.x;
		positionY = cY - radius * manifold.normal.y;
		
		dX = positionX - xf1.position.x;
		dY = positionY - xf1.position.y;
		tMat = xf1.R;
		tPoint.localPoint1.x = (dX*tMat.col1.x + dY*tMat.col1.y);
		tPoint.localPoint1.y = (dX*tMat.col2.x + dY*tMat.col2.y);
		
		dX = positionX - xf2.position.x;
		dY = positionY - xf2.position.y;
		tMat = xf2.R;
		tPoint.localPoint2.x = (dX*tMat.col1.x + dY*tMat.col1.y);
		tPoint.localPoint2.y = (dX*tMat.col2.x + dY*tMat.col2.y);
		tPoint.separation = dist - radius;
		tPoint.id.features.referenceEdge = 0;
		tPoint.id.features.flip = 0;
	}
b2Collision.b2TestOverlap = function (a, b) {
		var t1 = b.lowerBound;
		var t2 = a.upperBound;
		
		var d1X = t1.x - t2.x;
		var d1Y = t1.y - t2.y;
		
		t1 = a.lowerBound;
		t2 = b.upperBound;
		var d2X = t1.x - t2.x;
		var d2Y = t1.y - t2.y;
		
		if (d1X > 0.0 || d1Y > 0.0)
			return false;
		
		if (d2X > 0.0 || d2Y > 0.0)
			return false;
		
		return true;
	}
exports.b2Collision = b2Collision;


var b2Proxy = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2Proxy.prototype.__constructor = function(){}
b2Proxy.prototype.__varz = function(){
this.lowerBounds =  [parseInt(0), parseInt(0)];
this.upperBounds =  [parseInt(0), parseInt(0)];
}
b2Proxy.prototype.lowerBounds =  [parseInt(0), parseInt(0)];
b2Proxy.prototype.upperBounds =  [parseInt(0), parseInt(0)];
b2Proxy.prototype.overlapCount =  0;
b2Proxy.prototype.timeStamp =  0;
b2Proxy.prototype.userData =  null;
b2Proxy.prototype.GetNext = function () { return this.lowerBounds[0]; }
b2Proxy.prototype.SetNext = function (next) { this.lowerBounds[0] = next % 65535; }
b2Proxy.prototype.IsValid = function () { return this.overlapCount != b2BroadPhase.b2_invalid; }
exports.b2Proxy = b2Proxy;


var b2Segment = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2Segment.prototype.__constructor = function(){}
b2Segment.prototype.__varz = function(){
this.p1 =  new b2Vec2();
this.p2 =  new b2Vec2();
}
b2Segment.prototype.p1 =  new b2Vec2();
b2Segment.prototype.p2 =  new b2Vec2();
b2Segment.prototype.TestSegment = function (lambda, 
								normal, 
								segment, 
								maxLambda) {
		
		var s = segment.p1;
		
		var rX = segment.p2.x - s.x;
		var rY = segment.p2.y - s.y;
		
		var dX = this.p2.x - this.p1.x;
		var dY = this.p2.y - this.p1.y;
		
		var nX = dY;
		var nY = -dX;
		
		var k_slop = 100.0 * Number.MIN_VALUE;
		
		var denom = -(rX*nX + rY*nY);
		
		
		if (denom > k_slop)
		{
			
			
			var bX = s.x - this.p1.x;
			var bY = s.y - this.p1.y;
			
			var a = (bX*nX + bY*nY);
			
			if (0.0 <= a && a <= maxLambda * denom)
			{
				var mu2 = -rX * bY + rY * bX;
				
				
				if (-k_slop * denom <= mu2 && mu2 <= denom * (1.0 + k_slop))
				{
					a /= denom;
					
					var nLen = Math.sqrt(nX*nX + nY*nY);
					nX /= nLen;
					nY /= nLen;
					
					lambda[0] = a;
					
					normal.Set(nX, nY);
					return true;
				}
			}
		}
		
		return false;
	}
exports.b2Segment = b2Segment;


var b2Distance = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2Distance.prototype.__constructor = function(){}
b2Distance.prototype.__varz = function(){
}
b2Distance.g_GJK_Iterations =  0;
b2Distance.s_p1s =  [new b2Vec2(), new b2Vec2(), new b2Vec2()];
b2Distance.s_p2s =  [new b2Vec2(), new b2Vec2(), new b2Vec2()];
b2Distance.s_points =  [new b2Vec2(), new b2Vec2(), new b2Vec2()];
b2Distance.gPoint =  new b2Point();
b2Distance.ProcessTwo = function (x1, x2, p1s, p2s, points) {
	var points_0 = points[0];
	var points_1 = points[1];
	var p1s_0 = p1s[0];
	var p1s_1 = p1s[1];
	var p2s_0 = p2s[0];
	var p2s_1 = p2s[1];
	
	
	
	var rX = -points_1.x;
	var rY = -points_1.y;
	
	var dX = points_0.x - points_1.x;
	var dY = points_0.y - points_1.y;
	
	var length = Math.sqrt(dX*dX + dY*dY);
	dX /= length;
	dY /= length;
	
	
	var lambda = rX * dX + rY * dY;
	if (lambda <= 0.0 || length < Number.MIN_VALUE)
	{
		
		
		x1.SetV(p1s_1);
		
		x2.SetV(p2s_1);
		
		p1s_0.SetV(p1s_1);
		
		p2s_0.SetV(p2s_1);
		points_0.SetV(points_1);
		return 1;
	}

	
	lambda /= length;
	
	x1.x = p1s_1.x + lambda * (p1s_0.x - p1s_1.x);
	x1.y = p1s_1.y + lambda * (p1s_0.y - p1s_1.y);
	
	x2.x = p2s_1.x + lambda * (p2s_0.x - p2s_1.x);
	x2.y = p2s_1.y + lambda * (p2s_0.y - p2s_1.y);
	return 2;
}
b2Distance.ProcessThree = function (x1, x2, p1s, p2s, points) {
	var points_0 = points[0];
	var points_1 = points[1];
	var points_2 = points[2];
	var p1s_0 = p1s[0];
	var p1s_1 = p1s[1];
	var p1s_2 = p1s[2];
	var p2s_0 = p2s[0];
	var p2s_1 = p2s[1];
	var p2s_2 = p2s[2];
	
	
	var aX = points_0.x;
	var aY = points_0.y;
	
	var bX = points_1.x;
	var bY = points_1.y;
	
	var cX = points_2.x;
	var cY = points_2.y;

	
	var abX = bX - aX;
	var abY = bY - aY;
	
	var acX = cX - aX;
	var acY = cY - aY;
	
	var bcX = cX - bX;
	var bcY = cY - bY;

	
	var sn = -(aX * abX + aY * abY);
	var sd = (bX * abX + bY * abY);
	
	var tn = -(aX * acX + aY * acY);
	var td = (cX * acX + cY * acY);
	
	var un = -(bX * bcX + bY * bcY);
	var ud = (cX * bcX + cY * bcY);

	
	if (td <= 0.0 && ud <= 0.0)
	{
		
		
		x1.SetV(p1s_2);
		
		x2.SetV(p2s_2);
		
		p1s_0.SetV(p1s_2);
		
		p2s_0.SetV(p2s_2);
		points_0.SetV(points_2);
		return 1;
	}

	
	
	

	
	var n = abX * acY - abY * acX;

	
	
	var vc = n * (aX * bY - aY * bX); 
	
	var lambda;
	
	
	
	var va = n * (bX * cY - bY * cX); 
	if (va <= 0.0 && un >= 0.0 && ud >= 0.0 && (un+ud) > 0.0)
	{
		
		
		
		lambda = un / (un + ud);
		
		x1.x = p1s_1.x + lambda * (p1s_2.x - p1s_1.x);
		x1.y = p1s_1.y + lambda * (p1s_2.y - p1s_1.y);
		
		x2.x = p2s_1.x + lambda * (p2s_2.x - p2s_1.x);
		x2.y = p2s_1.y + lambda * (p2s_2.y - p2s_1.y);
		
		p1s_0.SetV(p1s_2);
		
		p2s_0.SetV(p2s_2);
		
		points_0.SetV(points_2);
		return 2;
	}

	
	
	var vb = n * (cX * aY - cY * aX);
	if (vb <= 0.0 && tn >= 0.0 && td >= 0.0 && (tn+td) > 0.0)
	{
		
		
		
		lambda = tn / (tn + td);
		
		x1.x = p1s_0.x + lambda * (p1s_2.x - p1s_0.x);
		x1.y = p1s_0.y + lambda * (p1s_2.y - p1s_0.y);
		
		x2.x = p2s_0.x + lambda * (p2s_2.x - p2s_0.x);
		x2.y = p2s_0.y + lambda * (p2s_2.y - p2s_0.y);
		
		p1s_1.SetV(p1s_2);
		
		p2s_1.SetV(p2s_2);
		
		points_1.SetV(points_2);
		return 2;
	}

	
	
	var denom = va + vb + vc;
	
	denom = 1.0 / denom;
	
	var u = va * denom;
	
	var v = vb * denom;
	
	var w = 1.0 - u - v;
	
	x1.x = u * p1s_0.x + v * p1s_1.x + w * p1s_2.x;
	x1.y = u * p1s_0.y + v * p1s_1.y + w * p1s_2.y;
	
	x2.x = u * p2s_0.x + v * p2s_1.x + w * p2s_2.x;
	x2.y = u * p2s_0.y + v * p2s_1.y + w * p2s_2.y;
	return 3;
}
b2Distance.InPoints = function (w, points, pointCount) {
	var k_tolerance = 100.0 * Number.MIN_VALUE;
	for (var i = 0; i < pointCount; ++i)
	{
		var points_i = points[i];
		
		var dX = Math.abs(w.x - points_i.x);
		var dY = Math.abs(w.y - points_i.y);
		
		var mX = Math.max(Math.abs(w.x), Math.abs(points_i.x));
		var mY = Math.max(Math.abs(w.y), Math.abs(points_i.y));
		
		if (dX < k_tolerance * (mX + 1.0) &&
			dY < k_tolerance * (mY + 1.0)){
			return true;
		}
	}

	return false;
}
b2Distance.DistanceGeneric = function (x1, x2, 
										shape1, xf1, 
										shape2, xf2) {
	var tVec;
	
	
	var p1s = b2Distance.s_p1s;
	var p2s = b2Distance.s_p2s;
	
	var points = b2Distance.s_points;
	
	var pointCount = 0;

	
	x1.SetV(shape1.GetFirstVertex(xf1));
	
	x2.SetV(shape2.GetFirstVertex(xf2));

	var vSqr = 0.0;
	var maxIterations = 20;
	for (var iter = 0; iter < maxIterations; ++iter)
	{
		
		var vX = x2.x - x1.x;
		var vY = x2.y - x1.y;
		
		var w1 = shape1.Support(xf1, vX, vY);
		
		var w2 = shape2.Support(xf2, -vX, -vY);
		
		vSqr = (vX*vX + vY*vY);
		
		var wX = w2.x - w1.x;
		var wY = w2.y - w1.y;
		
		var vw = (vX*wX + vY*wY);
		
		if (vSqr - vw <= 0.01 * vSqr) 
		{
			if (pointCount == 0)
			{
				
				x1.SetV(w1);
				
				x2.SetV(w2);
			}
			b2Distance.g_GJK_Iterations = iter;
			return Math.sqrt(vSqr);
		}
		
		switch (pointCount)
		{
		case 0:
			
			tVec = p1s[0];
			tVec.SetV(w1);
			
			tVec = p2s[0];
			tVec.SetV(w2);
			
			tVec = points[0];
			tVec.x = wX;
			tVec.y = wY;
			
			x1.SetV(p1s[0]);
			
			x2.SetV(p2s[0]);
			++pointCount;
			break;
			
		case 1:
			
			tVec = p1s[1];
			tVec.SetV(w1);
			
			tVec = p2s[1];
			tVec.SetV(w2);
			
			tVec = points[1];
			tVec.x = wX;
			tVec.y = wY;
			pointCount = b2Distance.ProcessTwo(x1, x2, p1s, p2s, points);
			break;
			
		case 2:
			
			tVec = p1s[2];
			tVec.SetV(w1);
			
			tVec = p2s[2];
			tVec.SetV(w2);
			
			tVec = points[2];
			tVec.x = wX;
			tVec.y = wY;
			pointCount = b2Distance.ProcessThree(x1, x2, p1s, p2s, points);
			break;
		}
		
		
		if (pointCount == 3)
		{
			b2Distance.g_GJK_Iterations = iter;
			return 0.0;
		}
		
		
		var maxSqr = -Number.MAX_VALUE;
		for (var i = 0; i < pointCount; ++i)
		{
			
			tVec = points[i];
			maxSqr = b2Math.b2Max(maxSqr, (tVec.x*tVec.x + tVec.y*tVec.y));
		}
		
		if (pointCount == 3 || vSqr <= 100.0 * Number.MIN_VALUE * maxSqr)
		{
			b2Distance.g_GJK_Iterations = iter;
			
			vX = x2.x - x1.x;
			vY = x2.y - x1.y;
			
			vSqr = (vX*vX + vY*vY);
			return Math.sqrt(vSqr);
		}
	}

	b2Distance.g_GJK_Iterations = maxIterations;
	return Math.sqrt(vSqr);
}
b2Distance.DistanceCC = function (
	x1, x2,
	circle1, xf1,
	circle2, xf2) {
	var tMat;
	var tVec;
	
	tMat = xf1.R;
	tVec = circle1.m_localPosition;
	var p1X = xf1.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
	var p1Y = xf1.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
	
	tMat = xf2.R;
	tVec = circle2.m_localPosition;
	var p2X = xf2.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
	var p2Y = xf2.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);

	
	var dX = p2X - p1X;
	var dY = p2Y - p1Y;
	var dSqr = (dX*dX + dY*dY);
	var r1 = circle1.m_radius - b2Settings.b2_toiSlop;
	var r2 = circle2.m_radius - b2Settings.b2_toiSlop;
	var r = r1 + r2;
	if (dSqr > r * r)
	{
		
		var dLen = Math.sqrt(dSqr);
		dX /= dLen;
		dY /= dLen;
		var distance = dLen - r;
		
		x1.x = p1X + r1 * dX;
		x1.y = p1Y + r1 * dY;
		
		x2.x = p2X - r2 * dX;
		x2.y = p2Y - r2 * dY;
		return distance;
	}
	else if (dSqr > Number.MIN_VALUE * Number.MIN_VALUE)
	{
		
		dLen = Math.sqrt(dSqr);
		dX /= dLen;
		dY /= dLen;
		
		x1.x = p1X + r1 * dX;
		x1.y = p1Y + r1 * dY;
		
		x2.x = x1.x;
		x2.y = x1.y;
		return 0.0;
	}

	
	x1.x = p1X;
	x1.y = p1Y;
	
	x2.x = x1.x;
	x2.y = x1.y;
	return 0.0;
}
b2Distance.DistancePC = function (
	x1, x2,
	polygon, xf1,
	circle, xf2) {
	
	var tMat;
	var tVec;
	
	var point = b2Distance.gPoint;
	
	tVec = circle.m_localPosition;
	tMat = xf2.R;
	point.p.x = xf2.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
	point.p.y = xf2.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);

	
	var distance = b2Distance.DistanceGeneric(x1, x2, polygon, xf1, point, b2Math.b2XForm_identity);

	var r = circle.m_radius - b2Settings.b2_toiSlop;

	if (distance > r)
	{
		distance -= r;
		
		var dX = x2.x - x1.x;
		var dY = x2.y - x1.y;
		
		var dLen = Math.sqrt(dX*dX + dY*dY);
		dX /= dLen;
		dY /= dLen;
		
		x2.x -= r * dX;
		x2.y -= r * dY;
	}
	else
	{
		distance = 0.0;
		
		x2.x = x1.x;
		x2.y = x1.y;
	}
	
	return distance;
}
b2Distance.Distance = function (x1, x2,
				 shape1, xf1,
				 shape2, xf2) {
	
	var type1 = shape1.m_type;
	
	var type2 = shape2.m_type;

	if (type1 == b2Shape.e_circleShape && type2 == b2Shape.e_circleShape)
	{
		
		return b2Distance.DistanceCC(x1, x2, shape1, xf1, shape2, xf2);
	}
	
	if (type1 == b2Shape.e_polygonShape && type2 == b2Shape.e_circleShape)
	{
		
		return b2Distance.DistancePC(x1, x2, shape1, xf1, shape2, xf2);
	}

	if (type1 == b2Shape.e_circleShape && type2 == b2Shape.e_polygonShape)
	{
		return b2Distance.DistancePC(x2, x1, shape2, xf2, shape1, xf1);
	}

	if (type1 == b2Shape.e_polygonShape && type2 == b2Shape.e_polygonShape)
	{
		return b2Distance.DistanceGeneric(x1, x2, shape1, xf1, shape2, xf2);
	}
	
	return 0.0;
}
exports.b2Distance = b2Distance;


var b2OBB = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2OBB.prototype.__constructor = function(){}
b2OBB.prototype.__varz = function(){
this.R =  new b2Mat22();
this.center =  new b2Vec2();
this.extents =  new b2Vec2();
}
b2OBB.prototype.R =  new b2Mat22();
b2OBB.prototype.center =  new b2Vec2();
b2OBB.prototype.extents =  new b2Vec2();
exports.b2OBB = b2OBB;


var b2BroadPhase = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2BroadPhase.prototype.__constructor = function (worldAABB, callback) {
		
		var i = 0;
		
		this.m_pairManager.Initialize(this, callback);
		
		this.m_worldAABB = worldAABB;
		
		this.m_proxyCount = 0;
		
		
		for (i = 0; i < b2Settings.b2_maxProxies; i++){
			this.m_queryResults[i] = 0;
		}
		
		
		this.m_bounds = new Array(2);
		for (i = 0; i < 2; i++){
			this.m_bounds[i] = new Array(2*b2Settings.b2_maxProxies);
			for (var j = 0; j < 2*b2Settings.b2_maxProxies; j++){
				this.m_bounds[i][j] = new b2Bound();
			}
		}
		
		
		var dX = worldAABB.upperBound.x - worldAABB.lowerBound.x;;
		var dY = worldAABB.upperBound.y - worldAABB.lowerBound.y;
		
		this.m_quantizationFactor.x = b2Settings.USHRT_MAX / dX;
		this.m_quantizationFactor.y = b2Settings.USHRT_MAX / dY;
		
		var tProxy;
		for (i = 0; i < b2Settings.b2_maxProxies - 1; ++i)
		{
			tProxy = new b2Proxy();
			this.m_proxyPool[i] = tProxy;
			tProxy.SetNext(i + 1);
			tProxy.timeStamp = 0;
			tProxy.overlapCount = b2BroadPhase.b2_invalid;
			tProxy.userData = null;
		}
		tProxy = new b2Proxy();
		this.m_proxyPool[parseInt(b2Settings.b2_maxProxies-1)] = tProxy;
		tProxy.SetNext(b2Pair.b2_nullProxy);
		tProxy.timeStamp = 0;
		tProxy.overlapCount = b2BroadPhase.b2_invalid;
		tProxy.userData = null;
		this.m_freeProxy = 0;
		
		this.m_timeStamp = 1;
		this.m_queryResultCount = 0;
	}
b2BroadPhase.prototype.__varz = function(){
this.m_pairManager =  new b2PairManager();
this.m_proxyPool =  new Array(b2Settings.b2_maxPairs);
this.m_bounds =  new Array(2*b2Settings.b2_maxProxies);
this.m_queryResults =  new Array(b2Settings.b2_maxProxies);
this.m_quantizationFactor =  new b2Vec2();
}
b2BroadPhase.s_validate =  false;
b2BroadPhase.b2_invalid =  b2Settings.USHRT_MAX;
b2BroadPhase.b2_nullEdge =  b2Settings.USHRT_MAX;
b2BroadPhase.BinarySearch = function (bounds, count, value) {
		var low = 0;
		var high = count - 1;
		while (low <= high)
		{
			var mid = Math.round((low + high) / 2);
			var bound = bounds[mid];
			if (bound.value > value)
			{
				high = mid - 1;
			}
			else if (bound.value < value)
			{
				low = mid + 1;
			}
			else
			{
				return parseInt(mid);
			}
		}
		
		return parseInt(low);
	}
b2BroadPhase.prototype.m_pairManager =  new b2PairManager();
b2BroadPhase.prototype.m_proxyPool =  new Array(b2Settings.b2_maxPairs);
b2BroadPhase.prototype.m_freeProxy =  0;
b2BroadPhase.prototype.m_bounds =  new Array(2*b2Settings.b2_maxProxies);
b2BroadPhase.prototype.m_queryResults =  new Array(b2Settings.b2_maxProxies);
b2BroadPhase.prototype.m_queryResultCount =  0;
b2BroadPhase.prototype.m_worldAABB =  null;
b2BroadPhase.prototype.m_quantizationFactor =  new b2Vec2();
b2BroadPhase.prototype.m_proxyCount =  0;
b2BroadPhase.prototype.m_timeStamp =  0;
b2BroadPhase.prototype.ComputeBounds = function (lowerValues, upperValues, aabb) {
		
		
		
		
		var minVertexX = aabb.lowerBound.x;
		var minVertexY = aabb.lowerBound.y;
		minVertexX = b2Math.b2Min(minVertexX, this.m_worldAABB.upperBound.x);
		minVertexY = b2Math.b2Min(minVertexY, this.m_worldAABB.upperBound.y);
		minVertexX = b2Math.b2Max(minVertexX, this.m_worldAABB.lowerBound.x);
		minVertexY = b2Math.b2Max(minVertexY, this.m_worldAABB.lowerBound.y);
		
		
		var maxVertexX = aabb.upperBound.x;
		var maxVertexY = aabb.upperBound.y;
		maxVertexX = b2Math.b2Min(maxVertexX, this.m_worldAABB.upperBound.x);
		maxVertexY = b2Math.b2Min(maxVertexY, this.m_worldAABB.upperBound.y);
		maxVertexX = b2Math.b2Max(maxVertexX, this.m_worldAABB.lowerBound.x);
		maxVertexY = b2Math.b2Max(maxVertexY, this.m_worldAABB.lowerBound.y);
		
		
		
		
		lowerValues[0] = parseInt(this.m_quantizationFactor.x * (minVertexX - this.m_worldAABB.lowerBound.x)) & (b2Settings.USHRT_MAX - 1);
		upperValues[0] = (parseInt(this.m_quantizationFactor.x * (maxVertexX - this.m_worldAABB.lowerBound.x))% 65535) | 1;
		
		lowerValues[1] = parseInt(this.m_quantizationFactor.y * (minVertexY - this.m_worldAABB.lowerBound.y)) & (b2Settings.USHRT_MAX - 1);
		upperValues[1] = (parseInt(this.m_quantizationFactor.y * (maxVertexY - this.m_worldAABB.lowerBound.y))% 65535) | 1;
	}
b2BroadPhase.prototype.TestOverlapValidate = function (p1, p2) {
		
		for (var axis = 0; axis < 2; ++axis)
		{
			var bounds = this.m_bounds[axis];
			
			
			
			
			
			
			var bound1 = bounds[p1.lowerBounds[axis]];
			var bound2 = bounds[p2.upperBounds[axis]];
			if (bound1.value > bound2.value)
				return false;
			
			bound1 = bounds[p1.upperBounds[axis]];
			bound2 = bounds[p2.lowerBounds[axis]];
			if (bound1.value < bound2.value)
				return false;
		}
		
		return true;
	}
b2BroadPhase.prototype.Query = function (lowerQueryOut, upperQueryOut, lowerValue, upperValue, bounds, boundCount, axis) {
		
		var lowerQuery = b2BroadPhase.BinarySearch(bounds, boundCount, lowerValue);
		var upperQuery = b2BroadPhase.BinarySearch(bounds, boundCount, upperValue);
		var bound;
		
		
		
		for (var j = lowerQuery; j < upperQuery; ++j)
		{
			bound = bounds[j];
			if (bound.IsLower())
			{
				this.IncrementOverlapCount(bound.proxyId);
			}
		}
		
		
		
		if (lowerQuery > 0)
		{
			var i = lowerQuery - 1;
			bound = bounds[i];
			var s = bound.stabbingCount;
			
			
			while (s)
			{
				
				bound = bounds[i];
				if (bound.IsLower())
				{
					var proxy = this.m_proxyPool[ bound.proxyId ];
					if (lowerQuery <= proxy.upperBounds[axis])
					{
						this.IncrementOverlapCount(bound.proxyId);
						--s;
					}
				}
				--i;
			}
		}
		
		lowerQueryOut[0] = lowerQuery;
		upperQueryOut[0] = upperQuery;
	}
b2BroadPhase.prototype.IncrementOverlapCount = function (proxyId) {
		var proxy = this.m_proxyPool[ proxyId ];
		if (proxy.timeStamp < this.m_timeStamp)
		{
			proxy.timeStamp = this.m_timeStamp;
			proxy.overlapCount = 1;
		}
		else
		{
			proxy.overlapCount = 2;
			
			this.m_queryResults[this.m_queryResultCount] = proxyId;
			++this.m_queryResultCount;
		}
	}
b2BroadPhase.prototype.IncrementTimeStamp = function () {
		if (this.m_timeStamp == b2Settings.USHRT_MAX)
		{
			for (var i = 0; i < b2Settings.b2_maxProxies; ++i)
			{
				(this.m_proxyPool[i]).timeStamp = 0;
			}
			this.m_timeStamp = 1;
		}
		else
		{
			++this.m_timeStamp;
		}
	}
b2BroadPhase.prototype.InRange = function (aabb) {
		
		var dX;
		var dY;
		var d2X;
		var d2Y;
		
		dX = aabb.lowerBound.x;
		dY = aabb.lowerBound.y;
		dX -= this.m_worldAABB.upperBound.x;
		dY -= this.m_worldAABB.upperBound.y;
		
		d2X = this.m_worldAABB.lowerBound.x;
		d2Y = this.m_worldAABB.lowerBound.y;
		d2X -= aabb.upperBound.x;
		d2Y -= aabb.upperBound.y;
		
		dX = b2Math.b2Max(dX, d2X);
		dY = b2Math.b2Max(dY, d2Y);
		
		return b2Math.b2Max(dX, dY) < 0.0;
	}
b2BroadPhase.prototype.GetProxy = function (proxyId) {
		var proxy = this.m_proxyPool[proxyId];
		if (proxyId == b2Pair.b2_nullProxy || proxy.IsValid() == false)
		{
			return null;
		}
		
		return proxy;
	}
b2BroadPhase.prototype.CreateProxy = function (aabb, userData) {
		var index = 0;
		var proxy;
		
		
		
		
		var proxyId = this.m_freeProxy;
		proxy = this.m_proxyPool[ proxyId ];
		this.m_freeProxy = proxy.GetNext();
		
		proxy.overlapCount = 0;
		proxy.userData = userData;
		
		var boundCount = 2 * this.m_proxyCount;
		
		var lowerValues = new Array();
		var upperValues = new Array();
		this.ComputeBounds(lowerValues, upperValues, aabb);
		
		for (var axis = 0; axis < 2; ++axis)
		{
			var bounds = this.m_bounds[axis];
			var lowerIndex = 0;
			var upperIndex = 0;
			var lowerIndexOut = [lowerIndex];
			var upperIndexOut = [upperIndex];
			this.Query(lowerIndexOut, upperIndexOut, lowerValues[axis], upperValues[axis], bounds, boundCount, axis);
			lowerIndex = lowerIndexOut[0];
			upperIndex = upperIndexOut[0];
			
			
			
			var tArr = new Array();
			var j = 0;
			var tEnd = boundCount - upperIndex
			var tBound1;
			var tBound2;
			var tBoundAS3;
			
			for (j = 0; j < tEnd; j++){
				tArr[j] = new b2Bound();
				tBound1 = tArr[j];
				tBound2 = bounds[parseInt(upperIndex+j)];
				tBound1.value = tBound2.value;
				tBound1.proxyId = tBound2.proxyId;
				tBound1.stabbingCount = tBound2.stabbingCount;
			}
			
			tEnd = tArr.length;
			var tIndex = upperIndex+2;
			for (j = 0; j < tEnd; j++){
				
				tBound2 = tArr[j];
				tBound1 = bounds[parseInt(tIndex+j)]
				tBound1.value = tBound2.value;
				tBound1.proxyId = tBound2.proxyId;
				tBound1.stabbingCount = tBound2.stabbingCount;
			}
			
			
			tArr = new Array();
			tEnd = upperIndex - lowerIndex;
			for (j = 0; j < tEnd; j++){
				tArr[j] = new b2Bound();
				tBound1 = tArr[j];
				tBound2 = bounds[parseInt(lowerIndex+j)];
				tBound1.value = tBound2.value;
				tBound1.proxyId = tBound2.proxyId;
				tBound1.stabbingCount = tBound2.stabbingCount;
			}
			
			tEnd = tArr.length;
			tIndex = lowerIndex+1;
			for (j = 0; j < tEnd; j++){
				
				tBound2 = tArr[j];
				tBound1 = bounds[parseInt(tIndex+j)]
				tBound1.value = tBound2.value;
				tBound1.proxyId = tBound2.proxyId;
				tBound1.stabbingCount = tBound2.stabbingCount;
			}
			
			
			++upperIndex;
			
			
			tBound1 = bounds[lowerIndex];
			tBound2 = bounds[upperIndex];
			tBound1.value = lowerValues[axis];
			tBound1.proxyId = proxyId;
			tBound2.value = upperValues[axis];
			tBound2.proxyId = proxyId;
			
			tBoundAS3 = bounds[parseInt(lowerIndex-1)];
			tBound1.stabbingCount = lowerIndex == 0 ? 0 : tBoundAS3.stabbingCount;
			tBoundAS3 = bounds[parseInt(upperIndex-1)];
			tBound2.stabbingCount = tBoundAS3.stabbingCount;
			
			
			for (index = lowerIndex; index < upperIndex; ++index)
			{
				tBoundAS3 = bounds[index];
				tBoundAS3.stabbingCount++;
			}
			
			
			for (index = lowerIndex; index < boundCount + 2; ++index)
			{
				tBound1 = bounds[index];
				var proxy2 = this.m_proxyPool[ tBound1.proxyId ];
				if (tBound1.IsLower())
				{
					proxy2.lowerBounds[axis] = index;
				}
				else
				{
					proxy2.upperBounds[axis] = index;
				}
			}
		}
		
		++this.m_proxyCount;
		
		
		
		for (var i = 0; i < this.m_queryResultCount; ++i)
		{
			
			
			
			this.m_pairManager.AddBufferedPair(proxyId, this.m_queryResults[i]);
		}
		
		this.m_pairManager.Commit();
		
		
		this.m_queryResultCount = 0;
		this.IncrementTimeStamp();
		
		return proxyId;
	}
b2BroadPhase.prototype.DestroyProxy = function (proxyId) {
		var tBound1;
		var tBound2;
		
		
		
		var proxy = this.m_proxyPool[ proxyId ];
		
		
		var boundCount = 2 * this.m_proxyCount;
		
		for (var axis = 0; axis < 2; ++axis)
		{
			var bounds = this.m_bounds[axis];
			
			var lowerIndex = proxy.lowerBounds[axis];
			var upperIndex = proxy.upperBounds[axis];
			tBound1 = bounds[lowerIndex];
			var lowerValue = tBound1.value;
			tBound2 = bounds[upperIndex];
			var upperValue = tBound2.value;
			
			
			
			var tArr = new Array();
			var j = 0;
			var tEnd = upperIndex - lowerIndex - 1;
			
			for (j = 0; j < tEnd; j++){
				tArr[j] = new b2Bound();
				tBound1 = tArr[j];
				tBound2 = bounds[parseInt(lowerIndex+1+j)];
				tBound1.value = tBound2.value;
				tBound1.proxyId = tBound2.proxyId;
				tBound1.stabbingCount = tBound2.stabbingCount;
			}
			
			tEnd = tArr.length;
			var tIndex = lowerIndex;
			for (j = 0; j < tEnd; j++){
				
				tBound2 = tArr[j];
				tBound1 = bounds[parseInt(tIndex+j)]
				tBound1.value = tBound2.value;
				tBound1.proxyId = tBound2.proxyId;
				tBound1.stabbingCount = tBound2.stabbingCount;
			}
			
			
			tArr = new Array();
			tEnd = boundCount - upperIndex - 1;
			for (j = 0; j < tEnd; j++){
				tArr[j] = new b2Bound();
				tBound1 = tArr[j];
				tBound2 = bounds[parseInt(upperIndex+1+j)];
				tBound1.value = tBound2.value;
				tBound1.proxyId = tBound2.proxyId;
				tBound1.stabbingCount = tBound2.stabbingCount;
			}
			
			tEnd = tArr.length;
			tIndex = upperIndex-1;
			for (j = 0; j < tEnd; j++){
				
				tBound2 = tArr[j];
				tBound1 = bounds[parseInt(tIndex+j)]
				tBound1.value = tBound2.value;
				tBound1.proxyId = tBound2.proxyId;
				tBound1.stabbingCount = tBound2.stabbingCount;
			}
			
			
			tEnd = boundCount - 2;
			for (var index = lowerIndex; index < tEnd; ++index)
			{
				tBound1 = bounds[index];
				var proxy2 = this.m_proxyPool[ tBound1.proxyId ];
				if (tBound1.IsLower())
				{
					proxy2.lowerBounds[axis] = index;
				}
				else
				{
					proxy2.upperBounds[axis] = index;
				}
			}
			
			
			tEnd = upperIndex - 1;
			for (var index2 = lowerIndex; index2 < tEnd; ++index2)
			{
				tBound1 = bounds[index2];
				tBound1.stabbingCount--;
			}
			
			
			
			this.Query([0], [0], lowerValue, upperValue, bounds, boundCount - 2, axis);
		}
		
		
		
		for (var i = 0; i < this.m_queryResultCount; ++i)
		{
			
			
			this.m_pairManager.RemoveBufferedPair(proxyId, this.m_queryResults[i]);
		}
		
		this.m_pairManager.Commit();
		
		
		this.m_queryResultCount = 0;
		this.IncrementTimeStamp();
		
		
		proxy.userData = null;
		proxy.overlapCount = b2BroadPhase.b2_invalid;
		proxy.lowerBounds[0] = b2BroadPhase.b2_invalid;
		proxy.lowerBounds[1] = b2BroadPhase.b2_invalid;
		proxy.upperBounds[0] = b2BroadPhase.b2_invalid;
		proxy.upperBounds[1] = b2BroadPhase.b2_invalid;
		
		proxy.SetNext(this.m_freeProxy);
		this.m_freeProxy = proxyId;
		--this.m_proxyCount;
	}
b2BroadPhase.prototype.MoveProxy = function (proxyId, aabb) {
		var as3arr;
		var as3int;
		
		var axis = 0;
		var index = 0;
		var bound;
		var prevBound;
		var nextBound;
		var nextProxyId = 0;
		var nextProxy;
		
		if (proxyId == b2Pair.b2_nullProxy || b2Settings.b2_maxProxies <= proxyId)
		{
			
			return;
		}
		
		if (aabb.IsValid() == false)
		{
			
			return;
		}
		
		var boundCount = 2 * this.m_proxyCount;
		
		var proxy = this.m_proxyPool[ proxyId ];
		
		var newValues = new b2BoundValues();
		this.ComputeBounds(newValues.lowerValues, newValues.upperValues, aabb);
		
		
		var oldValues = new b2BoundValues();
		for (axis = 0; axis < 2; ++axis)
		{
			bound = this.m_bounds[axis][proxy.lowerBounds[axis]];
			oldValues.lowerValues[axis] = bound.value;
			bound = this.m_bounds[axis][proxy.upperBounds[axis]];
			oldValues.upperValues[axis] = bound.value;
		}
		
		for (axis = 0; axis < 2; ++axis)
		{
			var bounds = this.m_bounds[axis];
			
			var lowerIndex = proxy.lowerBounds[axis];
			var upperIndex = proxy.upperBounds[axis];
			
			var lowerValue = newValues.lowerValues[axis];
			var upperValue = newValues.upperValues[axis];
			
			bound = bounds[lowerIndex];
			var deltaLower = lowerValue - bound.value;
			bound.value = lowerValue;
			
			bound = bounds[upperIndex];
			var deltaUpper = upperValue - bound.value;
			bound.value = upperValue;
			
			
			
			
			
			
			if (deltaLower < 0)
			{
				index = lowerIndex;
				while (index > 0 && lowerValue < (bounds[parseInt(index-1)]).value)
				{
					bound = bounds[index];
					prevBound = bounds[parseInt(index - 1)];
					
					var prevProxyId = prevBound.proxyId;
					var prevProxy = this.m_proxyPool[ prevBound.proxyId ];
					
					prevBound.stabbingCount++;
					
					if (prevBound.IsUpper() == true)
					{
						if (this.TestOverlap(newValues, prevProxy))
						{
							this.m_pairManager.AddBufferedPair(proxyId, prevProxyId);
						}
						
						
						as3arr = prevProxy.upperBounds;
						as3int = as3arr[axis];
						as3int++;
						as3arr[axis] = as3int;
						
						bound.stabbingCount++;
					}
					else
					{
						
						as3arr = prevProxy.lowerBounds;
						as3int = as3arr[axis];
						as3int++;
						as3arr[axis] = as3int;
						
						bound.stabbingCount--;
					}
					
					
					as3arr = proxy.lowerBounds;
					as3int = as3arr[axis];
					as3int--;
					as3arr[axis] = as3int;
					
					
					
					
					
					bound.Swap(prevBound);
					
					--index;
				}
			}
			
			
			if (deltaUpper > 0)
			{
				index = upperIndex;
				while (index < boundCount-1 && (bounds[parseInt(index+1)]).value <= upperValue)
				{
					bound = bounds[ index ];
					nextBound = bounds[ parseInt(index + 1) ];
					nextProxyId = nextBound.proxyId;
					nextProxy = this.m_proxyPool[ nextProxyId ];
					
					nextBound.stabbingCount++;
					
					if (nextBound.IsLower() == true)
					{
						if (this.TestOverlap(newValues, nextProxy))
						{
							this.m_pairManager.AddBufferedPair(proxyId, nextProxyId);
						}
						
						
						as3arr = nextProxy.lowerBounds;
						as3int = as3arr[axis];
						as3int--;
						as3arr[axis] = as3int;
						
						bound.stabbingCount++;
					}
					else
					{
						
						as3arr = nextProxy.upperBounds;
						as3int = as3arr[axis];
						as3int--;
						as3arr[axis] = as3int;
						
						bound.stabbingCount--;
					}
					
					
					as3arr = proxy.upperBounds;
					as3int = as3arr[axis];
					as3int++;
					as3arr[axis] = as3int;
					
					
					
					
					
					bound.Swap(nextBound);
					
					index++;
				}
			}
			
			
			
			
			
			
			if (deltaLower > 0)
			{
				index = lowerIndex;
				while (index < boundCount-1 && (bounds[parseInt(index+1)]).value <= lowerValue)
				{
					bound = bounds[ index ];
					nextBound = bounds[ parseInt(index + 1) ];
					
					nextProxyId = nextBound.proxyId;
					nextProxy = this.m_proxyPool[ nextProxyId ];
					
					nextBound.stabbingCount--;
					
					if (nextBound.IsUpper())
					{
						if (this.TestOverlap(oldValues, nextProxy))
						{
							this.m_pairManager.RemoveBufferedPair(proxyId, nextProxyId);
						}
						
						
						as3arr = nextProxy.upperBounds;
						as3int = as3arr[axis];
						as3int--;
						as3arr[axis] = as3int;
						
						bound.stabbingCount--;
					}
					else
					{
						
						as3arr = nextProxy.lowerBounds;
						as3int = as3arr[axis];
						as3int--;
						as3arr[axis] = as3int;
						
						bound.stabbingCount++;
					}
					
					
					as3arr = proxy.lowerBounds;
					as3int = as3arr[axis];
					as3int++;
					as3arr[axis] = as3int;
					
					
					
					
					
					bound.Swap(nextBound);
					
					index++;
				}
			}
			
			
			if (deltaUpper < 0)
			{
				index = upperIndex;
				while (index > 0 && upperValue < (bounds[parseInt(index-1)]).value)
				{
					bound = bounds[index];
					prevBound = bounds[parseInt(index - 1)];
					
					prevProxyId = prevBound.proxyId;
					prevProxy = this.m_proxyPool[ prevProxyId ];
					
					prevBound.stabbingCount--;
					
					if (prevBound.IsLower() == true)
					{
						if (this.TestOverlap(oldValues, prevProxy))
						{
							this.m_pairManager.RemoveBufferedPair(proxyId, prevProxyId);
						}
						
						
						as3arr = prevProxy.lowerBounds;
						as3int = as3arr[axis];
						as3int++;
						as3arr[axis] = as3int;
						
						bound.stabbingCount--;
					}
					else
					{
						
						as3arr = prevProxy.upperBounds;
						as3int = as3arr[axis];
						as3int++;
						as3arr[axis] = as3int;
						
						bound.stabbingCount++;
					}
					
					
					as3arr = proxy.upperBounds;
					as3int = as3arr[axis];
					as3int--;
					as3arr[axis] = as3int;
					
					
					
					
					
					bound.Swap(prevBound);
					
					index--;
				}
			}
		}
	}
b2BroadPhase.prototype.Commit = function () {
		this.m_pairManager.Commit();
	}
b2BroadPhase.prototype.QueryAABB = function (aabb, userData, maxCount) {
		var lowerValues = new Array();
		var upperValues = new Array();
		this.ComputeBounds(lowerValues, upperValues, aabb);
		
		var lowerIndex = 0;
		var upperIndex = 0;
		var lowerIndexOut = [lowerIndex];
		var upperIndexOut = [upperIndex];
		this.Query(lowerIndexOut, upperIndexOut, lowerValues[0], upperValues[0], this.m_bounds[0], 2*this.m_proxyCount, 0);
		this.Query(lowerIndexOut, upperIndexOut, lowerValues[1], upperValues[1], this.m_bounds[1], 2*this.m_proxyCount, 1);
		
		
		
		var count = 0;
		for (var i = 0; i < this.m_queryResultCount && count < maxCount; ++i, ++count)
		{
			
			var proxy = this.m_proxyPool[ this.m_queryResults[i] ];
			
			userData[i] = proxy.userData;
		}
		
		
		this.m_queryResultCount = 0;
		this.IncrementTimeStamp();
		
		return count;
	}
b2BroadPhase.prototype.Validate = function () {
		var pair;
		var proxy1;
		var proxy2;
		var overlap;
		
		for (var axis = 0; axis < 2; ++axis)
		{
			var bounds = this.m_bounds[axis];
			
			var boundCount = 2 * this.m_proxyCount;
			var stabbingCount = 0;
			
			for (var i = 0; i < boundCount; ++i)
			{
				var bound = bounds[i];
				
				
				
				
				if (bound.IsLower() == true)
				{
					
					stabbingCount++;
				}
				else
				{
					
					stabbingCount--;
				}
				
				
			}
		}
		
	}
b2BroadPhase.prototype.TestOverlap = function (b, p) {
		for (var axis = 0; axis < 2; ++axis)
		{
			var bounds = this.m_bounds[axis];
			
			
			
			
			var bound = bounds[p.upperBounds[axis]];
			if (b.lowerValues[axis] > bound.value)
				return false;
			
			bound = bounds[p.lowerBounds[axis]];
			if (b.upperValues[axis] < bound.value)
				return false;
		}
		
		return true;
	}
exports.b2BroadPhase = b2BroadPhase;
	
	
var b2TimeOfImpact = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2TimeOfImpact.prototype.__constructor = function(){}
b2TimeOfImpact.prototype.__varz = function(){
}
b2TimeOfImpact.s_p1 =  new b2Vec2();
b2TimeOfImpact.s_p2 =  new b2Vec2();
b2TimeOfImpact.s_xf1 =  new b2XForm();
b2TimeOfImpact.s_xf2 =  new b2XForm();
b2TimeOfImpact.TimeOfImpact = function (	shape1, sweep1,
								shape2, sweep2) {
	var math1;
	var math2;
	
	var r1 = shape1.m_sweepRadius;
	var r2 = shape2.m_sweepRadius;

	
	

	var t0 = sweep1.t0;
	
	var v1X = sweep1.c.x - sweep1.c0.x;
	var v1Y = sweep1.c.y - sweep1.c0.y;
	
	var v2X = sweep2.c.x - sweep2.c0.x;
	var v2Y = sweep2.c.y - sweep2.c0.y;
	var omega1 = sweep1.a - sweep1.a0;
	var omega2 = sweep2.a - sweep2.a0;

	var alpha = 0.0;

	var p1 = b2TimeOfImpact.s_p1;
	var p2 = b2TimeOfImpact.s_p2;
	var k_maxIterations = 20;	
	var iter = 0;
	
	var normalX = 0.0;
	var normalY = 0.0;
	var distance = 0.0;
	var targetDistance = 0.0;
	for(;;)
	{
		var t = (1.0 - alpha) * t0 + alpha;
		
		var xf1 = b2TimeOfImpact.s_xf1;
		var xf2 = b2TimeOfImpact.s_xf2;
		sweep1.GetXForm(xf1, t);
		sweep2.GetXForm(xf2, t);
		
		
		distance = b2Distance.Distance(p1, p2, shape1, xf1, shape2, xf2);
		
		if (iter == 0)
		{
			
			
			if (distance > 2.0 * b2Settings.b2_toiSlop)
			{
				targetDistance = 1.5 * b2Settings.b2_toiSlop;
			}
			else
			{
				
				math1 = 0.05 * b2Settings.b2_toiSlop;
				math2 = distance - 0.5 * b2Settings.b2_toiSlop;
				targetDistance = math1 > math2 ? math1 : math2;
			}
		}
		
		if (distance - targetDistance < 0.05 * b2Settings.b2_toiSlop || iter == k_maxIterations)
		{
			break;
		}
		
		
		normalX = p2.x - p1.x;
		normalY = p2.y - p1.y;
		
		var nLen = Math.sqrt(normalX*normalX + normalY*normalY);
		normalX /= nLen;
		normalY /= nLen;
		
		
		
		var approachVelocityBound = 	(normalX*(v1X - v2X) + normalY*(v1Y - v2Y))
											+ (omega1 < 0 ? -omega1 : omega1) * r1 
											+ (omega2 < 0 ? -omega2 : omega2) * r2;
		
		if (approachVelocityBound == 0)
		{
			alpha = 1.0;
			break;
		}
		
		
		var dAlpha = (distance - targetDistance) / approachVelocityBound;
		
		var newAlpha = alpha + dAlpha;
		
		
		if (newAlpha < 0.0 || 1.0 < newAlpha)
		{
			alpha = 1.0;
			break;
		}
		
		
		if (newAlpha < (1.0 + 100.0 * Number.MIN_VALUE) * alpha)
		{
			break;
		}
		
		alpha = newAlpha;
		
		++iter;
	}

	return alpha;
}
exports.b2TimeOfImpact = b2TimeOfImpact;


var b2ContactPoint = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2ContactPoint.prototype.__constructor = function(){}
b2ContactPoint.prototype.__varz = function(){
this.position =  new b2Vec2();
this.velocity =  new b2Vec2();
this.normal =  new b2Vec2();
this.id =  new b2ContactID();
}
b2ContactPoint.prototype.shape1 =  null;
b2ContactPoint.prototype.shape2 =  null;
b2ContactPoint.prototype.position =  new b2Vec2();
b2ContactPoint.prototype.velocity =  new b2Vec2();
b2ContactPoint.prototype.normal =  new b2Vec2();
b2ContactPoint.prototype.separation =  null;
b2ContactPoint.prototype.friction =  null;
b2ContactPoint.prototype.restitution =  null;
b2ContactPoint.prototype.id =  new b2ContactID();
exports.b2ContactPoint= b2ContactPoint;


var ClipVertex = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
ClipVertex.prototype.__constructor = function(){}
ClipVertex.prototype.__varz = function(){
this.v =  new b2Vec2();
this.id =  new b2ContactID();
}
ClipVertex.prototype.v =  new b2Vec2();
ClipVertex.prototype.id =  new b2ContactID();
exports.ClipVertex = ClipVertex;


var b2MassData = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2MassData.prototype.__constructor = function(){}
b2MassData.prototype.__varz = function(){
this.center =  new b2Vec2(0,0);
}
b2MassData.prototype.mass =  0.0;
b2MassData.prototype.center =  new b2Vec2(0,0);
b2MassData.prototype.I =  0.0;
exports.b2MassData = b2MassData;


var b2FilterData = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2FilterData.prototype.__constructor = function(){}
b2FilterData.prototype.__varz = function(){
this.categoryBits =  0x0001;
this.maskBits =  0xFFFF;
}
b2FilterData.prototype.categoryBits =  0x0001;
b2FilterData.prototype.maskBits =  0xFFFF;
b2FilterData.prototype.groupIndex =  0;
b2FilterData.prototype.Copy = function () {
		var copy = new b2FilterData();
		copy.categoryBits = this.categoryBits;
		copy.maskBits = this.maskBits;
		copy.groupIndex = this.groupIndex;
		return copy;
	}
exports.b2FilterData = b2FilterData;
	
	
var b2Shape = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2Shape.prototype.__constructor = function (def) {
		
		this.m_userData = def.userData;
		this.m_friction = def.friction;
		this.m_restitution = def.restitution;
		this.m_density = def.density;
		this.m_body = null;
		this.m_sweepRadius = 0.0;
		
		this.m_next = null;
		
		this.m_proxyId = b2Pair.b2_nullProxy;
		
		this.m_filter = def.filter.Copy();
		
		this.m_isSensor = def.isSensor;
		
	}
b2Shape.prototype.__varz = function(){
}
b2Shape.e_unknownShape =  	-1;
b2Shape.e_circleShape =  	0;
b2Shape.e_polygonShape =  	1;
b2Shape.e_shapeTypeCount =  	2;
b2Shape.s_proxyAABB =  new b2AABB();
b2Shape.s_syncAABB =  new b2AABB();
b2Shape.s_resetAABB =  new b2AABB();
b2Shape.Create = function (def, allocator) {
		switch (def.type)
		{
		case b2Shape.e_circleShape:
			{
				
				return new b2CircleShape(def);
			}
		
		case b2Shape.e_polygonShape:
			{
				
				return new b2PolygonShape(def);
			}
		
		default:
			
			return null;
		}
	}
b2Shape.Destroy = function (shape, allocator) {
		
	}
b2Shape.prototype.m_type =  0;
b2Shape.prototype.m_next =  null;
b2Shape.prototype.m_body =  null;
b2Shape.prototype.m_sweepRadius =  null;
b2Shape.prototype.m_density =  null;
b2Shape.prototype.m_friction =  null;
b2Shape.prototype.m_restitution =  null;
b2Shape.prototype.m_proxyId =  0;
b2Shape.prototype.m_filter =  null;
b2Shape.prototype.m_isSensor =  null;
b2Shape.prototype.m_userData =  null;
b2Shape.prototype.GetType = function () {
		return this.m_type;
	}
b2Shape.prototype.IsSensor = function () {
		return this.m_isSensor;
	}
b2Shape.prototype.SetFilterData = function (filter) {
		this.m_filter = filter.Copy();
	}
b2Shape.prototype.GetFilterData = function () {
		return this.m_filter.Copy();
	}
b2Shape.prototype.GetBody = function () {
		return this.m_body;
	}
b2Shape.prototype.GetNext = function () {
		return this.m_next;
	}
b2Shape.prototype.GetUserData = function () {
		return this.m_userData;
	}
b2Shape.prototype.SetUserData = function (data) {
		this.m_userData = data;
	}
b2Shape.prototype.TestPoint = function (xf, p) {return false}
b2Shape.prototype.TestSegment = function (xf,
								lambda, 
								normal, 
								segment,
								maxLambda) {return false}
b2Shape.prototype.ComputeAABB = function (aabb, xf) {}
b2Shape.prototype.ComputeSweptAABB = function (	aabb,
									xf1,
									xf2) {}
b2Shape.prototype.ComputeMass = function (massData) {}
b2Shape.prototype.GetSweepRadius = function () {
		return this.m_sweepRadius;
	}
b2Shape.prototype.GetFriction = function () {
		return this.m_friction;
	}
b2Shape.prototype.GetRestitution = function () {
		return this.m_restitution;
	}
b2Shape.prototype.CreateProxy = function (broadPhase, transform) {
		
		
		
		var aabb = b2Shape.s_proxyAABB;
		this.ComputeAABB(aabb, transform);
		
		var inRange = broadPhase.InRange(aabb);
		
		
		
		
		if (inRange)
		{
			this.m_proxyId = broadPhase.CreateProxy(aabb, this);
		}
		else
		{
			this.m_proxyId = b2Pair.b2_nullProxy;
		}
		
	}
b2Shape.prototype.DestroyProxy = function (broadPhase) {
		
		if (this.m_proxyId != b2Pair.b2_nullProxy)
		{
			broadPhase.DestroyProxy(this.m_proxyId);
			this.m_proxyId = b2Pair.b2_nullProxy;
		}
		
	}
b2Shape.prototype.Synchronize = function (broadPhase, transform1, transform2) {
		
		if (this.m_proxyId == b2Pair.b2_nullProxy)
		{	
			return false;
		}
		
		
		var aabb = b2Shape.s_syncAABB;
		this.ComputeSweptAABB(aabb, transform1, transform2);
		
		if (broadPhase.InRange(aabb))
		{
			broadPhase.MoveProxy(this.m_proxyId, aabb);
			return true;
		}
		else
		{
			return false;
		}
		
	}
b2Shape.prototype.RefilterProxy = function (broadPhase, transform) {
		
		if (this.m_proxyId == b2Pair.b2_nullProxy)
		{
			return;
		}
		
		broadPhase.DestroyProxy(this.m_proxyId);
		
		var aabb = b2Shape.s_resetAABB;
		this.ComputeAABB(aabb, transform);
		
		var inRange = broadPhase.InRange(aabb);
		
		if (inRange)
		{
			this.m_proxyId = broadPhase.CreateProxy(aabb, this);
		}
		else
		{
			this.m_proxyId = b2Pair.b2_nullProxy;
		}
		
	}
b2Shape.prototype.UpdateSweepRadius = function (center) {}
exports.b2Shape = b2Shape;


var b2CircleShape = function() {
b2Shape.prototype.__varz.call(this)
this.__varz();
this.__constructor.apply(this, arguments);
}
extend(b2CircleShape.prototype, b2Shape.prototype)
b2CircleShape.prototype._super = function(){ b2Shape.prototype.__constructor.apply(this, arguments) }
b2CircleShape.prototype.__constructor = function (def) {
		this._super(def);
		
		
		var circleDef = def;
		
		this.m_type = b2Shape.e_circleShape;
		this.m_localPosition.SetV(circleDef.localPosition);
		this.m_radius = circleDef.radius;
		
	}
b2CircleShape.prototype.__varz = function(){
this.m_localPosition =  new b2Vec2();
}
b2CircleShape.prototype.m_localPosition =  new b2Vec2();
b2CircleShape.prototype.m_radius =  null;
b2CircleShape.prototype.TestPoint = function (transform, p) {
		
		var tMat = transform.R;
		var dX = transform.position.x + (tMat.col1.x * this.m_localPosition.x + tMat.col2.x * this.m_localPosition.y);
		var dY = transform.position.y + (tMat.col1.y * this.m_localPosition.x + tMat.col2.y * this.m_localPosition.y);
		
		dX = p.x - dX;
		dY = p.y - dY;
		
		return (dX*dX + dY*dY) <= this.m_radius * this.m_radius;
	}
b2CircleShape.prototype.TestSegment = function (	transform,
						lambda, 
						normal, 
						segment,
						maxLambda) {
		
		var tMat = transform.R;
		var positionX = transform.position.x + (tMat.col1.x * this.m_localPosition.x + tMat.col2.x * this.m_localPosition.y);
		var positionY = transform.position.y + (tMat.col1.y * this.m_localPosition.x + tMat.col2.y * this.m_localPosition.y);
		
		
		var sX = segment.p1.x - positionX;
		var sY = segment.p1.y - positionY;
		
		var b = (sX*sX + sY*sY) - this.m_radius * this.m_radius;
		
		
		if (b < 0.0)
		{
			return false;
		}
		
		
		
		var rX = segment.p2.x - segment.p1.x;
		var rY = segment.p2.y - segment.p1.y;
		
		var c = (sX*rX + sY*rY);
		
		var rr = (rX*rX + rY*rY);
		var sigma = c * c - rr * b;
		
		
		if (sigma < 0.0 || rr < Number.MIN_VALUE)
		{
			return false;
		}
		
		
		var a = -(c + Math.sqrt(sigma));
		
		
		if (0.0 <= a && a <= maxLambda * rr)
		{
			a /= rr;
			
			lambda[0] = a;
			
			normal.x = sX + a * rX;
			normal.y = sY + a * rY;
			normal.Normalize();
			return true;
		}
		
		return false;
	}
b2CircleShape.prototype.ComputeAABB = function (aabb, transform) {
		
		var tMat = transform.R;
		var pX = transform.position.x + (tMat.col1.x * this.m_localPosition.x + tMat.col2.x * this.m_localPosition.y);
		var pY = transform.position.y + (tMat.col1.y * this.m_localPosition.x + tMat.col2.y * this.m_localPosition.y);
		aabb.lowerBound.Set(pX - this.m_radius, pY - this.m_radius);
		aabb.upperBound.Set(pX + this.m_radius, pY + this.m_radius);
	}
b2CircleShape.prototype.ComputeSweptAABB = function (	aabb,
							transform1,
							transform2) {
		var tMat;
		
		tMat = transform1.R;
		var p1X = transform1.position.x + (tMat.col1.x * this.m_localPosition.x + tMat.col2.x * this.m_localPosition.y);
		var p1Y = transform1.position.y + (tMat.col1.y * this.m_localPosition.x + tMat.col2.y * this.m_localPosition.y);
		
		tMat = transform2.R;
		var p2X = transform2.position.x + (tMat.col1.x * this.m_localPosition.x + tMat.col2.x * this.m_localPosition.y);
		var p2Y = transform2.position.y + (tMat.col1.y * this.m_localPosition.x + tMat.col2.y * this.m_localPosition.y);
		
		
		
		
		
		aabb.lowerBound.Set((p1X < p2X ? p1X : p2X) - this.m_radius, (p1Y < p2Y ? p1Y : p2Y) - this.m_radius);
		
		aabb.upperBound.Set((p1X > p2X ? p1X : p2X) + this.m_radius, (p1Y > p2Y ? p1Y : p2Y) + this.m_radius);
	}
b2CircleShape.prototype.ComputeMass = function (massData) {
		massData.mass = this.m_density * b2Settings.b2_pi * this.m_radius * this.m_radius;
		massData.center.SetV(this.m_localPosition);
		
		
		
		massData.I = massData.mass * (0.5 * this.m_radius * this.m_radius + (this.m_localPosition.x*this.m_localPosition.x + this.m_localPosition.y*this.m_localPosition.y));
	}
b2CircleShape.prototype.GetLocalPosition = function () {
		return this.m_localPosition;
	}
b2CircleShape.prototype.GetRadius = function () {
		return this.m_radius;
	}
b2CircleShape.prototype.UpdateSweepRadius = function (center) {
		
		
		
		var dX = this.m_localPosition.x - center.x;
		var dY = this.m_localPosition.y - center.y;
		dX = Math.sqrt(dX*dX + dY*dY); 
		
		this.m_sweepRadius = dX + this.m_radius - b2Settings.b2_toiSlop;
	}
exports.b2CircleShape = b2CircleShape;
	
	
var b2ShapeDef = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2ShapeDef.prototype.__constructor = function(){}
b2ShapeDef.prototype.__varz = function(){
this.type =  b2Shape.e_unknownShape;
this.filter =  new b2FilterData();
}
b2ShapeDef.prototype.type =  b2Shape.e_unknownShape;
b2ShapeDef.prototype.userData =  null;
b2ShapeDef.prototype.friction =  0.2;
b2ShapeDef.prototype.restitution =  0.0;
b2ShapeDef.prototype.density =  0.0;
b2ShapeDef.prototype.isSensor =  false;
b2ShapeDef.prototype.filter =  new b2FilterData();
exports.b2ShapeDef = b2ShapeDef;


var b2PolygonDef = function() {
b2ShapeDef.prototype.__varz.call(this)
this.__varz();
this.__constructor.apply(this, arguments);
}
extend(b2PolygonDef.prototype, b2ShapeDef.prototype)
b2PolygonDef.prototype._super = function(){ b2ShapeDef.prototype.__constructor.apply(this, arguments) }
b2PolygonDef.prototype.__constructor = function () {
		this.type = b2Shape.e_polygonShape;
		this.vertexCount = 0;
		
		for (var i = 0; i < b2Settings.b2_maxPolygonVertices; i++){
			this.vertices[i] = new b2Vec2();
		}
	}
b2PolygonDef.prototype.__varz = function(){
this.vertices =  new Array(b2Settings.b2_maxPolygonVertices);
}
b2PolygonDef.s_mat =  new b2Mat22();
b2PolygonDef.prototype.vertices =  new Array(b2Settings.b2_maxPolygonVertices);
b2PolygonDef.prototype.vertexCount =  0;
b2PolygonDef.prototype.SetAsBox = function (hx, hy) {
		this.vertexCount = 4;
		this.vertices[0].Set(-hx, -hy);
		this.vertices[1].Set( hx, -hy);
		this.vertices[2].Set( hx, hy);
		this.vertices[3].Set(-hx, hy);
	}
b2PolygonDef.prototype.SetAsOrientedBox = function (hx, hy, center, angle) {
		
		{
			this.vertexCount = 4;
			this.vertices[0].Set(-hx, -hy);
			this.vertices[1].Set( hx, -hy);
			this.vertices[2].Set( hx, hy);
			this.vertices[3].Set(-hx, hy);
		}
		
		if (center){
			
			
			var xfPosition = center;
			
			var xfR = b2PolygonDef.s_mat;
			xfR.Set(angle);
			
			for (var i = 0; i < this.vertexCount; ++i)
			{
				
				
				center = this.vertices[i];
				hx = xfPosition.x + (xfR.col1.x * center.x + xfR.col2.x * center.y)
				center.y = xfPosition.y + (xfR.col1.y * center.x + xfR.col2.y * center.y)
				center.x = hx;
			}
		}
	}
exports.b2PolygonDef = b2PolygonDef;
	
	
var b2PolygonShape = function() {
b2Shape.prototype.__varz.call(this)
this.__varz();
this.__constructor.apply(this, arguments);
}
extend(b2PolygonShape.prototype, b2Shape.prototype)
b2PolygonShape.prototype._super = function(){ b2Shape.prototype.__constructor.apply(this, arguments) }
b2PolygonShape.prototype.__constructor = function (def) {
		this._super(def);
		
		
		this.m_type = b2Shape.e_polygonShape;
		var poly = def;
		
		
		this.m_vertexCount = poly.vertexCount;
		
		
		var i = 0;
		var i1 = i;
		var i2 = i;
		
		
		for (i = 0; i < this.m_vertexCount; ++i)
		{
			this.m_vertices[i] = poly.vertices[i].Copy();
		}
		
		
		for (i = 0; i < this.m_vertexCount; ++i)
		{
			i1 = i;
			i2 = i + 1 < this.m_vertexCount ? i + 1 : 0;
			
			var edgeX = this.m_vertices[i2].x - this.m_vertices[i1].x;
			var edgeY = this.m_vertices[i2].y - this.m_vertices[i1].y;
			
			
			var len = Math.sqrt(edgeX*edgeX + edgeY*edgeY);
			
			this.m_normals[i] = new b2Vec2(edgeY/len, -edgeX/len);
		}
		
		
		
		
		this.m_centroid = b2PolygonShape.ComputeCentroid(poly.vertices, poly.vertexCount);
		
		
		b2PolygonShape.ComputeOBB(this.m_obb, this.m_vertices, this.m_vertexCount);
		
		
		
		for (i = 0; i < this.m_vertexCount; ++i)
		{
			i1 = i - 1 >= 0 ? i - 1 : this.m_vertexCount - 1;
			i2 = i;
			
			
			var n1X = this.m_normals[i1].x;
			var n1Y = this.m_normals[i1].y;
			
			var n2X = this.m_normals[i2].x;
			var n2Y = this.m_normals[i2].y;
			
			var vX = this.m_vertices[i].x - this.m_centroid.x;
			var vY = this.m_vertices[i].y - this.m_centroid.y;
			
			
			var dX = (n1X*vX + n1Y*vY) - b2Settings.b2_toiSlop;
			var dY = (n2X*vX + n2Y*vY) - b2Settings.b2_toiSlop;
			
			
			
			
			
			
			
			
			
			
			
			
			var det = 1.0/(n1X * n2Y - n1Y * n2X);
			
			this.m_coreVertices[i] = new b2Vec2(	det * (n2Y * dX - n1Y * dY) + this.m_centroid.x, 
											det * (n1X * dY - n2X * dX) + this.m_centroid.y);
		}
	}
b2PolygonShape.prototype.__varz = function(){
this.s_supportVec =  new b2Vec2();
this.m_obb =  new b2OBB();
this.m_vertices =  new Array(b2Settings.b2_maxPolygonVertices);
this.m_normals =  new Array(b2Settings.b2_maxPolygonVertices);
this.m_coreVertices =  new Array(b2Settings.b2_maxPolygonVertices);
}
b2PolygonShape.s_computeMat =  new b2Mat22();
b2PolygonShape.s_sweptAABB1 =  new b2AABB();
b2PolygonShape.s_sweptAABB2 =  new b2AABB();
b2PolygonShape.ComputeCentroid = function (vs, count) {
		
		
		var c = new b2Vec2();
		var area = 0.0;
		
		
		
		
		var p1X = 0.0;
		var p1Y = 0.0;
	
		
		var inv3 = 1.0 / 3.0;
		
		for (var i = 0; i < count; ++i)
		{
			
			
				
			
			var p2 = vs[i];
			
			var p3 = i + 1 < count ? vs[parseInt(i+1)] : vs[0];
			
			
			var e1X = p2.x - p1X;
			var e1Y = p2.y - p1Y;
			
			var e2X = p3.x - p1X;
			var e2Y = p3.y - p1Y;
			
			
			var D = (e1X * e2Y - e1Y * e2X);
			
			
			var triangleArea = 0.5 * D;
			area += triangleArea;
			
			
			
			c.x += triangleArea * inv3 * (p1X + p2.x + p3.x);
			c.y += triangleArea * inv3 * (p1Y + p2.y + p3.y);
		}
		
		
		
		
		c.x *= 1.0 / area;
		c.y *= 1.0 / area;
		return c;
	}
b2PolygonShape.ComputeOBB = function (obb, vs, count) {
		var i = 0;
		
		var p = new Array(b2Settings.b2_maxPolygonVertices + 1);
		for (i = 0; i < count; ++i)
		{
			p[i] = vs[i];
		}
		p[count] = p[0];
		
		var minArea = Number.MAX_VALUE;
		
		for (i = 1; i <= count; ++i)
		{
			var root = p[parseInt(i-1)];
			
			var uxX = p[i].x - root.x;
			var uxY = p[i].y - root.y;
			
			var length = Math.sqrt(uxX*uxX + uxY*uxY);
			uxX /= length;
			uxY /= length;
			
			
			var uyX = -uxY;
			var uyY = uxX;
			
			var lowerX = Number.MAX_VALUE;
			var lowerY = Number.MAX_VALUE;
			
			var upperX = -Number.MAX_VALUE;
			var upperY = -Number.MAX_VALUE;
			
			for (var j = 0; j < count; ++j)
			{
				
				var dX = p[j].x - root.x;
				var dY = p[j].y - root.y;
				
				
				var rX = (uxX*dX + uxY*dY);
				
				var rY = (uyX*dX + uyY*dY);
				
				if (rX < lowerX) lowerX = rX;
				if (rY < lowerY) lowerY = rY;
				
				if (rX > upperX) upperX = rX;
				if (rY > upperY) upperY = rY;
			}
			
			var area = (upperX - lowerX) * (upperY - lowerY);
			if (area < 0.95 * minArea)
			{
				minArea = area;
				
				obb.R.col1.x = uxX;
				obb.R.col1.y = uxY;
				
				obb.R.col2.x = uyX;
				obb.R.col2.y = uyY;
				
				var centerX = 0.5 * (lowerX + upperX);
				var centerY = 0.5 * (lowerY + upperY);
				
				var tMat = obb.R;
				obb.center.x = root.x + (tMat.col1.x * centerX + tMat.col2.x * centerY);
				obb.center.y = root.y + (tMat.col1.y * centerX + tMat.col2.y * centerY);
				
				obb.extents.x = 0.5 * (upperX - lowerX);
				obb.extents.y = 0.5 * (upperY - lowerY);
			}
		}
		
		
	}
b2PolygonShape.prototype.s_supportVec =  new b2Vec2();
b2PolygonShape.prototype.m_centroid =  null;
b2PolygonShape.prototype.m_obb =  new b2OBB();
b2PolygonShape.prototype.m_vertices =  new Array(b2Settings.b2_maxPolygonVertices);
b2PolygonShape.prototype.m_normals =  new Array(b2Settings.b2_maxPolygonVertices);
b2PolygonShape.prototype.m_coreVertices =  new Array(b2Settings.b2_maxPolygonVertices);
b2PolygonShape.prototype.m_vertexCount =  0;
b2PolygonShape.prototype.TestPoint = function (xf, p) {
		var tVec;
		
		
		var tMat = xf.R;
		var tX = p.x - xf.position.x;
		var tY = p.y - xf.position.y;
		var pLocalX = (tX*tMat.col1.x + tY*tMat.col1.y);
		var pLocalY = (tX*tMat.col2.x + tY*tMat.col2.y);
		
		for (var i = 0; i < this.m_vertexCount; ++i)
		{
			
			tVec = this.m_vertices[i];
			tX = pLocalX - tVec.x;
			tY = pLocalY - tVec.y;
			tVec = this.m_normals[i];
			var dot = (tVec.x * tX + tVec.y * tY);
			if (dot > 0.0)
			{
				return false;
			}
		}
		
		return true;
	}
b2PolygonShape.prototype.TestSegment = function ( xf,
		lambda, 
		normal, 
		segment,
		maxLambda) {
		var lower = 0.0;
		var upper = maxLambda;
		
		var tX;
		var tY;
		var tMat;
		var tVec;
		
		
		tX = segment.p1.x - xf.position.x;
		tY = segment.p1.y - xf.position.y;
		tMat = xf.R;
		var p1X = (tX * tMat.col1.x + tY * tMat.col1.y);
		var p1Y = (tX * tMat.col2.x + tY * tMat.col2.y);
		
		tX = segment.p2.x - xf.position.x;
		tY = segment.p2.y - xf.position.y;
		tMat = xf.R;
		var p2X = (tX * tMat.col1.x + tY * tMat.col1.y);
		var p2Y = (tX * tMat.col2.x + tY * tMat.col2.y);
		
		var dX = p2X - p1X;
		var dY = p2Y - p1Y;
		var index = -1;
		
		for (var i = 0; i < this.m_vertexCount; ++i)
		{
			
			
			
			
			
			tVec = this.m_vertices[i];
			tX = tVec.x - p1X;
			tY = tVec.y - p1Y;
			tVec = this.m_normals[i];
			var numerator = (tVec.x*tX + tVec.y*tY);
			
			var denominator = (tVec.x*dX + tVec.y*dY);
			
			
			
			
			
			
			if (denominator < 0.0 && numerator < lower * denominator)
			{
				
				
				lower = numerator / denominator;
				index = i;
			}
			else if (denominator > 0.0 && numerator < upper * denominator)
			{
				
				
				upper = numerator / denominator;
			}
			
			if (upper < lower)
			{
				return false;
			}
		}
		
		
		
		if (index >= 0)
		{
			
			lambda[0] = lower;
			
			tMat = xf.R;
			tVec = this.m_normals[index];
			normal.x = (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
			normal.y = (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
			return true;
		}
		
		return false;
	}
b2PolygonShape.prototype.ComputeAABB = function (aabb, xf) {
		var tMat;
		var tVec;
		
		var R = b2PolygonShape.s_computeMat;
		
		tMat = xf.R;
		tVec = this.m_obb.R.col1;
		
		R.col1.x = (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
		R.col1.y = (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
		
		tVec = this.m_obb.R.col2;
		
		R.col2.x = (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
		R.col2.y = (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
		
		
		R.Abs();
		var absR = R;
		
		tVec = this.m_obb.extents;
		var hX = (absR.col1.x * tVec.x + absR.col2.x * tVec.y);
		var hY = (absR.col1.y * tVec.x + absR.col2.y * tVec.y);
		
		tMat = xf.R;
		tVec = this.m_obb.center;
		var positionX = xf.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
		var positionY = xf.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
		
		aabb.lowerBound.Set(positionX - hX, positionY - hY);
		
		aabb.upperBound.Set(positionX + hX, positionY + hY);
	}
b2PolygonShape.prototype.ComputeSweptAABB = function (	aabb,
		transform1,
		transform2) {
		
		var aabb1 = b2PolygonShape.s_sweptAABB1;
		var aabb2 = b2PolygonShape.s_sweptAABB2;
		this.ComputeAABB(aabb1, transform1);
		this.ComputeAABB(aabb2, transform2);
		
		aabb.lowerBound.Set((aabb1.lowerBound.x < aabb2.lowerBound.x ? aabb1.lowerBound.x : aabb2.lowerBound.x),
							(aabb1.lowerBound.y < aabb2.lowerBound.y ? aabb1.lowerBound.y : aabb2.lowerBound.y));
		
		aabb.upperBound.Set((aabb1.upperBound.x > aabb2.upperBound.x ? aabb1.upperBound.x : aabb2.upperBound.x),
							(aabb1.upperBound.y > aabb2.upperBound.y ? aabb1.upperBound.y : aabb2.upperBound.y));
	}
b2PolygonShape.prototype.ComputeMass = function (massData) {
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		var centerX = 0.0;
		var centerY = 0.0;
		var area = 0.0;
		var I = 0.0;
		
		
		
		
		var p1X = 0.0;
		var p1Y = 0.0;
		
		
		var k_inv3 = 1.0 / 3.0;
		
		for (var i = 0; i < this.m_vertexCount; ++i)
		{
			
			
			
			
			var p2 = this.m_vertices[i];
			
			var p3 = i + 1 < this.m_vertexCount ? this.m_vertices[parseInt(i+1)] : this.m_vertices[0];
			
			
			var e1X = p2.x - p1X;
			var e1Y = p2.y - p1Y;
			
			var e2X = p3.x - p1X;
			var e2Y = p3.y - p1Y;
			
			
			var D = e1X * e2Y - e1Y * e2X;
			
			
			var triangleArea = 0.5 * D;
			area += triangleArea;
			
			
			
			centerX += triangleArea * k_inv3 * (p1X + p2.x + p3.x);
			centerY += triangleArea * k_inv3 * (p1Y + p2.y + p3.y);
			
			
			var px = p1X;
			var py = p1Y;
			
			var ex1 = e1X;
			var ey1 = e1Y;
			
			var ex2 = e2X;
			var ey2 = e2Y;
			
			
			var intx2 = k_inv3 * (0.25 * (ex1*ex1 + ex2*ex1 + ex2*ex2) + (px*ex1 + px*ex2)) + 0.5*px*px;
			
			var inty2 = k_inv3 * (0.25 * (ey1*ey1 + ey2*ey1 + ey2*ey2) + (py*ey1 + py*ey2)) + 0.5*py*py;
			
			I += D * (intx2 + inty2);
		}
		
		
		massData.mass = this.m_density * area;
		
		
		
		
		centerX *= 1.0 / area;
		centerY *= 1.0 / area;
		
		massData.center.Set(centerX, centerY);
		
		
		massData.I = this.m_density * I;
	}
b2PolygonShape.prototype.GetOBB = function () {
		return this.m_obb;
	}
b2PolygonShape.prototype.GetCentroid = function () {
		return this.m_centroid;
	}
b2PolygonShape.prototype.GetVertexCount = function () {
		return this.m_vertexCount;
	}
b2PolygonShape.prototype.GetVertices = function () {
		return this.m_vertices;
	}
b2PolygonShape.prototype.GetCoreVertices = function () {
		return this.m_coreVertices;
	}
b2PolygonShape.prototype.GetNormals = function () {
		return this.m_normals;
	}
b2PolygonShape.prototype.GetFirstVertex = function (xf) {
		return b2Math.b2MulX(xf, this.m_coreVertices[0]);
	}
b2PolygonShape.prototype.Centroid = function (xf) {
		return b2Math.b2MulX(xf, this.m_centroid);
	}
b2PolygonShape.prototype.Support = function (xf, dX, dY) {
		var tVec;
		
		var tMat;
		
		tMat = xf.R;
		var dLocalX = (dX * tMat.col1.x + dY * tMat.col1.y);
		var dLocalY = (dX * tMat.col2.x + dY * tMat.col2.y);
		
		var bestIndex = 0;
		
		tVec = this.m_coreVertices[0];
		var bestValue = (tVec.x*dLocalX + tVec.y*dLocalY);
		for (var i = 1; i < this.m_vertexCount; ++i)
		{
			
			tVec = this.m_coreVertices[i];
			var value = (tVec.x*dLocalX + tVec.y*dLocalY);
			if (value > bestValue)
			{
				bestIndex = i;
				bestValue = value;
			}
		}
		
		
		tMat = xf.R;
		tVec = this.m_coreVertices[bestIndex];
		this.s_supportVec.x = xf.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
		this.s_supportVec.y = xf.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
		return this.s_supportVec;
		
	}
b2PolygonShape.prototype.UpdateSweepRadius = function (center) {
		var tVec;
		
		
		
		this.m_sweepRadius = 0.0;
		for (var i = 0; i < this.m_vertexCount; ++i)
		{
			
			tVec = this.m_coreVertices[i];
			var dX = tVec.x - center.x;
			var dY = tVec.y - center.y;
			dX = Math.sqrt(dX*dX + dY*dY);
			
			if (dX > this.m_sweepRadius) this.m_sweepRadius = dX;
		}
	}
exports.b2PolygonShape = b2PolygonShape;


var b2CircleDef = function() {
b2ShapeDef.prototype.__varz.call(this)
this.__varz();
this.__constructor.apply(this, arguments);
}
extend(b2CircleDef.prototype, b2ShapeDef.prototype)
b2CircleDef.prototype._super = function(){ b2ShapeDef.prototype.__constructor.apply(this, arguments) }
b2CircleDef.prototype.__constructor = function () {
		this.type = b2Shape.e_circleShape;
		this.radius = 1.0;
	}
b2CircleDef.prototype.__varz = function(){
this.localPosition =  new b2Vec2(0.0, 0.0);
}
b2CircleDef.prototype.localPosition =  new b2Vec2(0.0, 0.0);
b2CircleDef.prototype.radius =  null;
exports.b2CircleDef = b2CircleDef;


var b2TimeStep = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2TimeStep.prototype.__constructor = function(){}
b2TimeStep.prototype.__varz = function(){
}
b2TimeStep.prototype.dt =  null;
b2TimeStep.prototype.inv_dt =  null;
b2TimeStep.prototype.dtRatio =  null;
b2TimeStep.prototype.maxIterations =  0;
b2TimeStep.prototype.warmStarting =  null;
b2TimeStep.prototype.positionCorrection =  null;
exports.b2TimeStep = b2TimeStep;


var b2BoundaryListener = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2BoundaryListener.prototype.__constructor = function(){}
b2BoundaryListener.prototype.__varz = function(){
}
b2BoundaryListener.prototype.Violation = function (body) {}
exports.b2BoundaryListener = b2BoundaryListener;


var b2ContactListener = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2ContactListener.prototype.__constructor = function(){}
b2ContactListener.prototype.__varz = function(){
}
b2ContactListener.prototype.Add = function (point) {}
b2ContactListener.prototype.Persist = function (point) {}
b2ContactListener.prototype.Remove = function (point) {}
b2ContactListener.prototype.Result = function (point) {}
exports.b2ContactListener = b2ContactListener;


var b2DestructionListener = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2DestructionListener.prototype.__constructor = function(){}
b2DestructionListener.prototype.__varz = function(){
}
b2DestructionListener.prototype.SayGoodbyeJoint = function (joint) {}
b2DestructionListener.prototype.SayGoodbyeShape = function (shape) {}
exports.b2DestructionListener = b2DestructionListener;


var b2DebugDraw = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2DebugDraw.prototype.__constructor = function () {
		this.m_drawFlags = 0;
	}
b2DebugDraw.prototype.__varz = function(){
}
b2DebugDraw.e_shapeBit =  0x0001;
b2DebugDraw.e_jointBit =  0x0002;
b2DebugDraw.e_coreShapeBit =  0x0004;
b2DebugDraw.e_aabbBit =  0x0008;
b2DebugDraw.e_obbBit =  0x0010;
b2DebugDraw.e_pairBit =  0x0020;
b2DebugDraw.e_centerOfMassBit =  0x0040;
b2DebugDraw.prototype.m_drawFlags =  0;
b2DebugDraw.prototype.m_sprite =  null;
b2DebugDraw.prototype.m_drawScale =  1.0;
b2DebugDraw.prototype.m_lineThickness =  1.0;
b2DebugDraw.prototype.m_alpha =  1.0;
b2DebugDraw.prototype.m_fillAlpha =  1.0;
b2DebugDraw.prototype.m_xformScale =  1.0;
b2DebugDraw.prototype.SetFlags = function (flags) {
		this.m_drawFlags = flags;
	}
b2DebugDraw.prototype.GetFlags = function () {
		return this.m_drawFlags;
	}
b2DebugDraw.prototype.AppendFlags = function (flags) {
		this.m_drawFlags |= flags;
	}
b2DebugDraw.prototype.ClearFlags = function (flags) {
		this.m_drawFlags &= ~flags;
	}
b2DebugDraw.prototype.DrawPolygon = function (vertices, vertexCount, color) {
		
		this.m_sprite.graphics.lineStyle(this.m_lineThickness, color.color, this.m_alpha);
		this.m_sprite.graphics.moveTo(vertices[0].x * this.m_drawScale, vertices[0].y * this.m_drawScale);
		for (var i = 1; i < vertexCount; i++){
				this.m_sprite.graphics.lineTo(vertices[i].x * this.m_drawScale, vertices[i].y * this.m_drawScale);
		}
		this.m_sprite.graphics.lineTo(vertices[0].x * this.m_drawScale, vertices[0].y * this.m_drawScale);
		
	}
b2DebugDraw.prototype.DrawSolidPolygon = function (vertices, vertexCount, color) {
		
		this.m_sprite.graphics.lineStyle(this.m_lineThickness, color.color, this.m_alpha);
		this.m_sprite.graphics.moveTo(vertices[0].x * this.m_drawScale, vertices[0].y * this.m_drawScale);
		this.m_sprite.graphics.beginFill(color.color, this.m_fillAlpha);
		for (var i = 1; i < vertexCount; i++){
				this.m_sprite.graphics.lineTo(vertices[i].x * this.m_drawScale, vertices[i].y * this.m_drawScale);
		}
		this.m_sprite.graphics.lineTo(vertices[0].x * this.m_drawScale, vertices[0].y * this.m_drawScale);
		this.m_sprite.graphics.endFill();
		
	}
b2DebugDraw.prototype.DrawCircle = function (center, radius, color) {
		
		this.m_sprite.graphics.lineStyle(this.m_lineThickness, color.color, this.m_alpha);
		this.m_sprite.graphics.drawCircle(center.x * this.m_drawScale, center.y * this.m_drawScale, radius * this.m_drawScale);
		
	}
b2DebugDraw.prototype.DrawSolidCircle = function (center, radius, axis, color) {
		
		this.m_sprite.graphics.lineStyle(this.m_lineThickness, color.color, this.m_alpha);
		this.m_sprite.graphics.moveTo(0,0);
		this.m_sprite.graphics.beginFill(color.color, this.m_fillAlpha);
		this.m_sprite.graphics.drawCircle(center.x * this.m_drawScale, center.y * this.m_drawScale, radius * this.m_drawScale);
		this.m_sprite.graphics.endFill();
		this.m_sprite.graphics.moveTo(center.x * this.m_drawScale, center.y * this.m_drawScale);
		this.m_sprite.graphics.lineTo((center.x + axis.x*radius) * this.m_drawScale, (center.y + axis.y*radius) * this.m_drawScale);
		
	}
b2DebugDraw.prototype.DrawSegment = function (p1, p2, color) {
		
		this.m_sprite.graphics.lineStyle(this.m_lineThickness, color.color, this.m_alpha);
		this.m_sprite.graphics.moveTo(p1.x * this.m_drawScale, p1.y * this.m_drawScale);
		this.m_sprite.graphics.lineTo(p2.x * this.m_drawScale, p2.y * this.m_drawScale);
		
	}
b2DebugDraw.prototype.DrawXForm = function (xf) {
		
		this.m_sprite.graphics.lineStyle(this.m_lineThickness, 0xff0000, this.m_alpha);
		this.m_sprite.graphics.moveTo(xf.position.x * this.m_drawScale, xf.position.y * this.m_drawScale);
		this.m_sprite.graphics.lineTo((xf.position.x + this.m_xformScale*xf.R.col1.x) * this.m_drawScale, (xf.position.y + this.m_xformScale*xf.R.col1.y) * this.m_drawScale);
		
		this.m_sprite.graphics.lineStyle(this.m_lineThickness, 0x00ff00, this.m_alpha);
		this.m_sprite.graphics.moveTo(xf.position.x * this.m_drawScale, xf.position.y * this.m_drawScale);
		this.m_sprite.graphics.lineTo((xf.position.x + this.m_xformScale*xf.R.col2.x) * this.m_drawScale, (xf.position.y + this.m_xformScale*xf.R.col2.y) * this.m_drawScale);
		
	}
exports.b2DebugDraw = b2DebugDraw;
	
	
var b2BodyDef = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2BodyDef.prototype.__constructor = function () {
		this.massData.center.SetZero();
		this.massData.mass = 0.0;
		this.massData.I = 0.0;
		this.userData = null;
		this.position.Set(0.0, 0.0);
		this.angle = 0.0;
		this.linearDamping = 0.0;
		this.angularDamping = 0.0;
		this.allowSleep = true;
		this.isSleeping = false;
		this.fixedRotation = false;
		this.isBullet = false;
	}
b2BodyDef.prototype.__varz = function(){
this.massData =  new b2MassData();
this.position =  new b2Vec2();
}
b2BodyDef.prototype.massData =  new b2MassData();
b2BodyDef.prototype.userData =  null;
b2BodyDef.prototype.position =  new b2Vec2();
b2BodyDef.prototype.angle =  null;
b2BodyDef.prototype.linearDamping =  null;
b2BodyDef.prototype.angularDamping =  null;
b2BodyDef.prototype.allowSleep =  null;
b2BodyDef.prototype.isSleeping =  null;
b2BodyDef.prototype.fixedRotation =  null;
b2BodyDef.prototype.isBullet =  null;
exports.b2BodyDef = b2BodyDef;
	
	
var b2Body = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2Body.prototype.__constructor = function (bd, world) {
		
		
		this.m_flags = 0;
		
		if (bd.isBullet)
		{
			this.m_flags |= b2Body.e_bulletFlag;
		}
		if (bd.fixedRotation)
		{
			this.m_flags |= b2Body.e_fixedRotationFlag;
		}
		if (bd.allowSleep)
		{
			this.m_flags |= b2Body.e_allowSleepFlag;
		}
		if (bd.isSleeping)
		{
			this.m_flags |= b2Body.e_sleepFlag;
		}
		
		this.m_world = world;
		
		this.m_xf.position.SetV(bd.position);
		this.m_xf.R.Set(bd.angle);
		
		this.m_sweep.localCenter.SetV(bd.massData.center);
		this.m_sweep.t0 = 1.0;
		this.m_sweep.a0 = this.m_sweep.a = bd.angle;
		
		
		
		var tMat = this.m_xf.R;
		var tVec = this.m_sweep.localCenter;
		
		this.m_sweep.c.x = (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
		
		this.m_sweep.c.y = (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
		
		this.m_sweep.c.x += this.m_xf.position.x;
		this.m_sweep.c.y += this.m_xf.position.y;
		
		this.m_sweep.c0.SetV(this.m_sweep.c);
		
		this.m_jointList = null;
		this.m_contactList = null;
		this.m_prev = null;
		this.m_next = null;
		
		this.m_linearDamping = bd.linearDamping;
		this.m_angularDamping = bd.angularDamping;
		
		this.m_force.Set(0.0, 0.0);
		this.m_torque = 0.0;
		
		this.m_linearVelocity.SetZero();
		this.m_angularVelocity = 0.0;
		
		this.m_sleepTime = 0.0;
		
		this.m_invMass = 0.0;
		this.m_I = 0.0;
		this.m_invI = 0.0;
		
		this.m_mass = bd.massData.mass;
		
		if (this.m_mass > 0.0)
		{
			this.m_invMass = 1.0 / this.m_mass;
		}
		
		if ((this.m_flags & b2Body.e_fixedRotationFlag) == 0)
		{
			this.m_I = bd.massData.I;
		}
		
		if (this.m_I > 0.0)
		{
			this.m_invI = 1.0 / this.m_I;
		}
		
		if (this.m_invMass == 0.0 && this.m_invI == 0.0)
		{
			this.m_type = b2Body.e_staticType;
		}
		else
		{
			this.m_type = b2Body.e_dynamicType;
		}
	
		this.m_userData = bd.userData;
		
		this.m_shapeList = null;
		this.m_shapeCount = 0;
	}
b2Body.prototype.__varz = function(){
this.m_xf =  new b2XForm();
this.m_sweep =  new b2Sweep();
this.m_linearVelocity =  new b2Vec2();
this.m_force =  new b2Vec2();
}
b2Body.e_frozenFlag =  0x0002;
b2Body.e_islandFlag =  0x0004;
b2Body.e_sleepFlag =  0x0008;
b2Body.e_allowSleepFlag =  0x0010;
b2Body.e_bulletFlag =  0x0020;
b2Body.e_fixedRotationFlag =  0x0040;
b2Body.e_staticType =  1;
b2Body.e_dynamicType =  2;
b2Body.e_maxTypes =  3;
b2Body.s_massData =  new b2MassData();
b2Body.s_xf1 =  new b2XForm();
b2Body.prototype.m_flags =  0;
b2Body.prototype.m_type =  0;
b2Body.prototype.m_xf =  new b2XForm();
b2Body.prototype.m_sweep =  new b2Sweep();
b2Body.prototype.m_linearVelocity =  new b2Vec2();
b2Body.prototype.m_angularVelocity =  null;
b2Body.prototype.m_force =  new b2Vec2();
b2Body.prototype.m_torque =  null;
b2Body.prototype.m_world =  null;
b2Body.prototype.m_prev =  null;
b2Body.prototype.m_next =  null;
b2Body.prototype.m_shapeList =  null;
b2Body.prototype.m_shapeCount =  0;
b2Body.prototype.m_jointList =  null;
b2Body.prototype.m_contactList =  null;
b2Body.prototype.m_mass =  null;
b2Body.prototype.m_invMass =  null;
b2Body.prototype.m_I =  null;
b2Body.prototype.m_invI =  null;
b2Body.prototype.m_linearDamping =  null;
b2Body.prototype.m_angularDamping =  null;
b2Body.prototype.m_sleepTime =  null;
b2Body.prototype.m_userData =  null;
b2Body.prototype.CreateShape = function (def) {
		
		if (this.m_world.m_lock == true)
		{
			return null;
		}
		
		var s = b2Shape.Create(def, this.m_world.m_blockAllocator);
		
		s.m_next = this.m_shapeList;
		this.m_shapeList = s;
		++this.m_shapeCount;
		
		s.m_body = this;
		
		
		s.CreateProxy(this.m_world.m_broadPhase, this.m_xf);
		
		
		s.UpdateSweepRadius(this.m_sweep.localCenter);
		
		return s;
	}
b2Body.prototype.DestroyShape = function (s) {
		
		if (this.m_world.m_lock == true)
		{
			return;
		}
		
		
		s.DestroyProxy(this.m_world.m_broadPhase);
		
		
		
		var node = this.m_shapeList;
		var ppS = null; 
		var found = false;
		while (node != null)
		{
			if (node == s)
			{
				if (ppS)
					ppS.m_next = s.m_next;
				else
					this.m_shapeList = s.m_next;
				
				found = true;
				break;
			}
			
			ppS = node;
			node = node.m_next;
		}
		
		
		
		
		s.m_body = null;
		s.m_next = null;
		
		--this.m_shapeCount;
		
		b2Shape.Destroy(s, this.m_world.m_blockAllocator);
	}
b2Body.prototype.SetMass = function (massData) {
		var s;
		
		
		if (this.m_world.m_lock == true)
		{
			return;
		}
		
		this.m_invMass = 0.0;
		this.m_I = 0.0;
		this.m_invI = 0.0;
		
		this.m_mass = massData.mass;
		
		if (this.m_mass > 0.0)
		{
			this.m_invMass = 1.0 / this.m_mass;
		}
		
		if ((this.m_flags & b2Body.e_fixedRotationFlag) == 0)
		{
			this.m_I = massData.I;
		}
		
		if (this.m_I > 0.0)
		{
			this.m_invI = 1.0 / this.m_I;
		}
		
		
		this.m_sweep.localCenter.SetV(massData.center);
		
		
		var tMat = this.m_xf.R;
		var tVec = this.m_sweep.localCenter;
		
		this.m_sweep.c.x = (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
		
		this.m_sweep.c.y = (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
		
		this.m_sweep.c.x += this.m_xf.position.x;
		this.m_sweep.c.y += this.m_xf.position.y;
		
		this.m_sweep.c0.SetV(this.m_sweep.c);
		
		
		for (s = this.m_shapeList; s; s = s.m_next)
		{
			s.UpdateSweepRadius(this.m_sweep.localCenter);
		}

		var oldType = this.m_type;
		if (this.m_invMass == 0.0 && this.m_invI == 0.0)
		{
			this.m_type = b2Body.e_staticType;
		}
		else
		{
			this.m_type = b2Body.e_dynamicType;
		}
	
		
		if (oldType != this.m_type)
		{
			for (s = this.m_shapeList; s; s = s.m_next)
			{
				s.RefilterProxy(this.m_world.m_broadPhase, this.m_xf);
			}
		}
	}
b2Body.prototype.SetMassFromShapes = function () {
		
		var s;
		
		
		if (this.m_world.m_lock == true)
		{
			return;
		}
		
		
		this.m_mass = 0.0;
		this.m_invMass = 0.0;
		this.m_I = 0.0;
		this.m_invI = 0.0;
		
		
		var centerX = 0.0;
		var centerY = 0.0;
		var massData = b2Body.s_massData;
		for (s = this.m_shapeList; s; s = s.m_next)
		{
			s.ComputeMass(massData);
			this.m_mass += massData.mass;
			
			centerX += massData.mass * massData.center.x;
			centerY += massData.mass * massData.center.y;
			this.m_I += massData.I;
		}
		
		
		if (this.m_mass > 0.0)
		{
			this.m_invMass = 1.0 / this.m_mass;
			centerX *= this.m_invMass;
			centerY *= this.m_invMass;
		}
		
		if (this.m_I > 0.0 && (this.m_flags & b2Body.e_fixedRotationFlag) == 0)
		{
			
			
			this.m_I -= this.m_mass * (centerX * centerX + centerY * centerY);
			
			this.m_invI = 1.0 / this.m_I;
		}
		else
		{
			this.m_I = 0.0;
			this.m_invI = 0.0;
		}
		
		
		this.m_sweep.localCenter.Set(centerX, centerY);
		
		
		var tMat = this.m_xf.R;
		var tVec = this.m_sweep.localCenter;
		
		this.m_sweep.c.x = (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
		
		this.m_sweep.c.y = (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
		
		this.m_sweep.c.x += this.m_xf.position.x;
		this.m_sweep.c.y += this.m_xf.position.y;
		
		this.m_sweep.c0.SetV(this.m_sweep.c);
		
		
		for (s = this.m_shapeList; s; s = s.m_next)
		{
			s.UpdateSweepRadius(this.m_sweep.localCenter);
		}
		
		var oldType = this.m_type;
		if (this.m_invMass == 0.0 && this.m_invI == 0.0)
		{
			this.m_type = b2Body.e_staticType;
		}
		else
		{
			this.m_type = b2Body.e_dynamicType;
		}
		
		
		if (oldType != this.m_type)
		{
			for (s = this.m_shapeList; s; s = s.m_next)
			{
				s.RefilterProxy(this.m_world.m_broadPhase, this.m_xf);
			}
		}
	}
b2Body.prototype.SetXForm = function (position, angle) {
		
		var s;
		
		
		if (this.m_world.m_lock == true)
		{
			return true;
		}
		
		if (this.IsFrozen())
		{
			return false;
		}
		
		this.m_xf.R.Set(angle);
		this.m_xf.position.SetV(position);
		
		
		
		var tMat = this.m_xf.R;
		var tVec = this.m_sweep.localCenter;
		
		this.m_sweep.c.x = (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
		
		this.m_sweep.c.y = (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
		
		this.m_sweep.c.x += this.m_xf.position.x;
		this.m_sweep.c.y += this.m_xf.position.y;
		
		this.m_sweep.c0.SetV(this.m_sweep.c);
		
		this.m_sweep.a0 = this.m_sweep.a = angle;
		
		var freeze = false;
		for (s = this.m_shapeList; s; s = s.m_next)
		{
			var inRange = s.Synchronize(this.m_world.m_broadPhase, this.m_xf, this.m_xf);
			
			if (inRange == false)
			{
				freeze = true;
				break;
			}
		}
		
		if (freeze == true)
		{
			this.m_flags |= b2Body.e_frozenFlag;
			this.m_linearVelocity.SetZero();
			this.m_angularVelocity = 0.0;
			for (s = this.m_shapeList; s; s = s.m_next)
			{
				s.DestroyProxy(this.m_world.m_broadPhase);
			}
			
			
			return false;
		}
		
		
		this.m_world.m_broadPhase.Commit();
		return true;
		
	}
b2Body.prototype.GetXForm = function () {
		return this.m_xf;
	}
b2Body.prototype.GetPosition = function () {
		return this.m_xf.position;
	}
b2Body.prototype.GetAngle = function () {
		return this.m_sweep.a;
	}
b2Body.prototype.GetWorldCenter = function () {
		return this.m_sweep.c;
	}
b2Body.prototype.GetLocalCenter = function () {
		return this.m_sweep.localCenter;
	}
b2Body.prototype.SetLinearVelocity = function (v) {
		this.m_linearVelocity.SetV(v);
	}
b2Body.prototype.GetLinearVelocity = function () {
		return this.m_linearVelocity;
	}
b2Body.prototype.SetAngularVelocity = function (omega) {
		this.m_angularVelocity = omega;
	}
b2Body.prototype.GetAngularVelocity = function () {
		return this.m_angularVelocity;
	}
b2Body.prototype.ApplyForce = function (force, point) {
		if (this.IsSleeping())
		{
			this.WakeUp();
		}
		
		this.m_force.x += force.x;
		this.m_force.y += force.y;
		
		this.m_torque += ((point.x - this.m_sweep.c.x) * force.y - (point.y - this.m_sweep.c.y) * force.x);
	}
b2Body.prototype.ApplyTorque = function (torque) {
		if (this.IsSleeping())
		{
			this.WakeUp();
		}
		this.m_torque += torque;
	}
b2Body.prototype.ApplyImpulse = function (impulse, point) {
		if (this.IsSleeping())
		{
			this.WakeUp();
		}
		
		this.m_linearVelocity.x += this.m_invMass * impulse.x;
		this.m_linearVelocity.y += this.m_invMass * impulse.y;
		
		this.m_angularVelocity += this.m_invI * ((point.x - this.m_sweep.c.x) * impulse.y - (point.y - this.m_sweep.c.y) * impulse.x);
	}
b2Body.prototype.GetMass = function () {
		return this.m_mass;
	}
b2Body.prototype.GetInertia = function () {
		return this.m_I;
	}
b2Body.prototype.GetWorldPoint = function (localPoint) {
		
		var A = this.m_xf.R;
		var u = new b2Vec2(A.col1.x * localPoint.x + A.col2.x * localPoint.y, 
								 A.col1.y * localPoint.x + A.col2.y * localPoint.y);
		u.x += this.m_xf.position.x;
		u.y += this.m_xf.position.y;
		return u;
	}
b2Body.prototype.GetWorldVector = function (localVector) {
		return b2Math.b2MulMV(this.m_xf.R, localVector);
	}
b2Body.prototype.GetLocalPoint = function (worldPoint) {
		return b2Math.b2MulXT(this.m_xf, worldPoint);
	}
b2Body.prototype.GetLocalVector = function (worldVector) {
		return b2Math.b2MulTMV(this.m_xf.R, worldVector);
	}
b2Body.prototype.GetLinearVelocityFromWorldPoint = function (worldPoint) {
		
		return new b2Vec2(	this.m_linearVelocity.x - this.m_angularVelocity * (worldPoint.y - this.m_sweep.c.y), 
							this.m_linearVelocity.y + this.m_angularVelocity * (worldPoint.x - this.m_sweep.c.x));
	}
b2Body.prototype.GetLinearVelocityFromLocalPoint = function (localPoint) {
		
		var A = this.m_xf.R;
		var worldPoint = new b2Vec2(A.col1.x * localPoint.x + A.col2.x * localPoint.y, 
								 A.col1.y * localPoint.x + A.col2.y * localPoint.y);
		worldPoint.x += this.m_xf.position.x;
		worldPoint.y += this.m_xf.position.y;
		return new b2Vec2(this.m_linearVelocity.x + this.m_angularVelocity * (worldPoint.y - this.m_sweep.c.y), 
		 this.m_linearVelocity.x - this.m_angularVelocity * (worldPoint.x - this.m_sweep.c.x));
	}
b2Body.prototype.IsBullet = function () {
		return (this.m_flags & b2Body.e_bulletFlag) == b2Body.e_bulletFlag;
	}
b2Body.prototype.SetBullet = function (flag) {
		if (flag)
		{
			this.m_flags |= b2Body.e_bulletFlag;
		}
		else
		{
			this.m_flags &= ~b2Body.e_bulletFlag;
		}
	}
b2Body.prototype.IsStatic = function () {
		return this.m_type == b2Body.e_staticType;
	}
b2Body.prototype.IsDynamic = function () {
		return this.m_type == b2Body.e_dynamicType;
	}
b2Body.prototype.IsFrozen = function () {
		return (this.m_flags & b2Body.e_frozenFlag) == b2Body.e_frozenFlag;
	}
b2Body.prototype.IsSleeping = function () {
		return (this.m_flags & b2Body.e_sleepFlag) == b2Body.e_sleepFlag;
	}
b2Body.prototype.AllowSleeping = function (flag) {
		if (flag)
		{
			this.m_flags |= b2Body.e_allowSleepFlag;
		}
		else
		{
			this.m_flags &= ~b2Body.e_allowSleepFlag;
			this.WakeUp();
		}
	}
b2Body.prototype.WakeUp = function () {
		this.m_flags &= ~b2Body.e_sleepFlag;
		this.m_sleepTime = 0.0;
	}
b2Body.prototype.PutToSleep = function () {
		this.m_flags |= b2Body.e_sleepFlag;
		this.m_sleepTime = 0.0;
		this.m_linearVelocity.SetZero();
		this.m_angularVelocity = 0.0;
		this.m_force.SetZero();
		this.m_torque = 0.0;
	}
b2Body.prototype.GetShapeList = function () {
		return this.m_shapeList;
	}
b2Body.prototype.GetJointList = function () {
		return this.m_jointList;
	}
b2Body.prototype.GetNext = function () {
		return this.m_next;
	}
b2Body.prototype.GetUserData = function () {
		return this.m_userData;
	}
b2Body.prototype.SetUserData = function (data) {
		this.m_userData = data;
	}
b2Body.prototype.GetWorld = function () {
		return this.m_world;
	}
b2Body.prototype.SynchronizeShapes = function () {
		
		var xf1 = b2Body.s_xf1;
		xf1.R.Set(this.m_sweep.a0);
		
		var tMat = xf1.R;
		var tVec = this.m_sweep.localCenter;
		xf1.position.x = this.m_sweep.c0.x - (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
		xf1.position.y = this.m_sweep.c0.y - (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
		
		var s;
		
		var inRange = true;
		for (s = this.m_shapeList; s; s = s.m_next)
		{
			inRange = s.Synchronize(this.m_world.m_broadPhase, xf1, this.m_xf);
			if (inRange == false)
			{
				break;
			}
		}
		
		if (inRange == false)
		{
			this.m_flags |= b2Body.e_frozenFlag;
			this.m_linearVelocity.SetZero();
			this.m_angularVelocity = 0.0;
			for (s = this.m_shapeList; s; s = s.m_next)
			{
				s.DestroyProxy(this.m_world.m_broadPhase);
			}
			
			
			return false;
		}
		
		
		return true;
		
	}
b2Body.prototype.SynchronizeTransform = function () {
		this.m_xf.R.Set(this.m_sweep.a);
		
		var tMat = this.m_xf.R;
		var tVec = this.m_sweep.localCenter;
		this.m_xf.position.x = this.m_sweep.c.x - (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
		this.m_xf.position.y = this.m_sweep.c.y - (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
	}
b2Body.prototype.IsConnected = function (other) {
		for (var jn = this.m_jointList; jn; jn = jn.next)
		{
			if (jn.other == other)
				return jn.joint.m_collideConnected == false;
		}
		
		return false;
	}
b2Body.prototype.Advance = function (t) {
		
		this.m_sweep.Advance(t);
		this.m_sweep.c.SetV(this.m_sweep.c0);
		this.m_sweep.a = this.m_sweep.a0;
		this.SynchronizeTransform();
	}
exports.b2Body = b2Body;
	
	
var b2ContactFilter = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2ContactFilter.prototype.__constructor = function(){}
b2ContactFilter.prototype.__varz = function(){
}
b2ContactFilter.b2_defaultFilter =  new b2ContactFilter();
b2ContactFilter.prototype.ShouldCollide = function (shape1, shape2) {
		var filter1 = shape1.GetFilterData();
		var filter2 = shape2.GetFilterData();
		
		if (filter1.groupIndex == filter2.groupIndex && filter1.groupIndex != 0)
		{
			return filter1.groupIndex > 0;
		}
		
		var collide = (filter1.maskBits & filter2.categoryBits) != 0 && (filter1.categoryBits & filter2.maskBits) != 0;
		return collide;
	}
exports.b2ContactFilter = b2ContactFilter;
	
	
var b2ContactResult = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2ContactResult.prototype.__constructor = function(){}
b2ContactResult.prototype.__varz = function(){
this.position =  new b2Vec2();
this.normal =  new b2Vec2();
this.id =  new b2ContactID();
}
b2ContactResult.prototype.shape1 =  null;
b2ContactResult.prototype.shape2 =  null;
b2ContactResult.prototype.position =  new b2Vec2();
b2ContactResult.prototype.normal =  new b2Vec2();
b2ContactResult.prototype.normalImpulse =  null;
b2ContactResult.prototype.tangentImpulse =  null;
b2ContactResult.prototype.id =  new b2ContactID();
exports.b2ContactResult = b2ContactResult;
	
	
var b2Island = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2Island.prototype.__constructor = function (
	bodyCapacity,
	contactCapacity,
	jointCapacity,
	allocator,
	listener) {
		var i = 0;
		
		this.m_bodyCapacity = bodyCapacity;
		this.m_contactCapacity = contactCapacity;
		this.m_jointCapacity	 = jointCapacity;
		this.m_bodyCount = 0;
		this.m_contactCount = 0;
		this.m_jointCount = 0;
		
		this.m_allocator = allocator;
		this.m_listener = listener;
		
		
		this.m_bodies = new Array(bodyCapacity);
		for (i = 0; i < bodyCapacity; i++)
			this.m_bodies[i] = null;
		
		
		this.m_contacts = new Array(contactCapacity);
		for (i = 0; i < contactCapacity; i++)
			this.m_contacts[i] = null;
		
		
		this.m_joints = new Array(jointCapacity);
		for (i = 0; i < jointCapacity; i++)
			this.m_joints[i] = null;
		
		this.m_positionIterationCount = 0;
		
	}
b2Island.prototype.__varz = function(){
}
b2Island.s_reportCR =  new b2ContactResult();
b2Island.prototype.m_allocator =  null;
b2Island.prototype.m_listener =  null;
b2Island.prototype.m_bodies =  null;
b2Island.prototype.m_contacts =  null;
b2Island.prototype.m_joints =  null;
b2Island.prototype.m_bodyCount =  0;
b2Island.prototype.m_jointCount =  0;
b2Island.prototype.m_contactCount =  0;
b2Island.prototype.m_bodyCapacity =  0;
b2Island.prototype.m_contactCapacity =  0;
b2Island.prototype.m_jointCapacity =  0;
b2Island.prototype.m_positionIterationCount =  0;
b2Island.prototype.Clear = function () {
		this.m_bodyCount = 0;
		this.m_contactCount = 0;
		this.m_jointCount = 0;
	}
b2Island.prototype.Solve = function (step, gravity, correctPositions, allowSleep) {
		var i = 0;
		var b;
		var joint;
		
		
		for (i = 0; i < this.m_bodyCount; ++i)
		{
			b = this.m_bodies[i];
			
			if (b.IsStatic())
				continue;
			
			
			
			b.m_linearVelocity.x += step.dt * (gravity.x + b.m_invMass * b.m_force.x);
			b.m_linearVelocity.y += step.dt * (gravity.y + b.m_invMass * b.m_force.y);
			b.m_angularVelocity += step.dt * b.m_invI * b.m_torque;
			
			
			b.m_force.SetZero();
			b.m_torque = 0.0;
			
			
			
			
			
			
			
			
			b.m_linearVelocity.Multiply( b2Math.b2Clamp(1.0 - step.dt * b.m_linearDamping, 0.0, 1.0) );
			b.m_angularVelocity *= b2Math.b2Clamp(1.0 - step.dt * b.m_angularDamping, 0.0, 1.0);
			
			
			
			if ((b.m_linearVelocity.LengthSquared()) > b2Settings.b2_maxLinearVelocitySquared)
			{
				b.m_linearVelocity.Normalize();
				b.m_linearVelocity.x *= b2Settings.b2_maxLinearVelocity;
				b.m_linearVelocity.y *= b2Settings.b2_maxLinearVelocity;
			}
			
			if (b.m_angularVelocity * b.m_angularVelocity > b2Settings.b2_maxAngularVelocitySquared)
			{
				if (b.m_angularVelocity < 0.0)
				{
					b.m_angularVelocity = -b2Settings.b2_maxAngularVelocity;
				}
				else
				{
					b.m_angularVelocity = b2Settings.b2_maxAngularVelocity;
				}
			}
		}
		
		var contactSolver = new b2ContactSolver(step, this.m_contacts, this.m_contactCount, this.m_allocator);
		
		
		contactSolver.InitVelocityConstraints(step);
		
		for (i = 0; i < this.m_jointCount; ++i)
		{
			joint = this.m_joints[i];
			joint.InitVelocityConstraints(step);
		}
		
		
		for (i = 0; i < step.maxIterations; ++i)
		{
			contactSolver.SolveVelocityConstraints();
			
			for (var j = 0; j < this.m_jointCount; ++j)
			{
				joint = this.m_joints[j];
				joint.SolveVelocityConstraints(step);
			}
		}
		
		
		contactSolver.FinalizeVelocityConstraints();
		
		
		for (i = 0; i < this.m_bodyCount; ++i)
		{
			b = this.m_bodies[i];
			
			if (b.IsStatic())
				continue;
			
			
			b.m_sweep.c0.SetV(b.m_sweep.c);
			b.m_sweep.a0 = b.m_sweep.a;
			
			
			
			b.m_sweep.c.x += step.dt * b.m_linearVelocity.x;
			b.m_sweep.c.y += step.dt * b.m_linearVelocity.y;
			b.m_sweep.a += step.dt * b.m_angularVelocity;
			
			
			b.SynchronizeTransform();
			
			
		}
		
		if (correctPositions)
		{
			
			
			for (i = 0; i < this.m_jointCount; ++i)
			{
				joint = this.m_joints[i];
				joint.InitPositionConstraints();
			}
			
			
			for (this.m_positionIterationCount = 0; this.m_positionIterationCount < step.maxIterations; ++this.m_positionIterationCount)
			{
				var contactsOkay = contactSolver.SolvePositionConstraints(b2Settings.b2_contactBaumgarte);
				
				var jointsOkay = true;
				for (i = 0; i < this.m_jointCount; ++i)
				{
					joint = this.m_joints[i];
					var jointOkay = joint.SolvePositionConstraints();
					jointsOkay = jointsOkay && jointOkay;
				}
				
				if (contactsOkay && jointsOkay)
				{
					break;
				}
			}
		}
		
		this.Report(contactSolver.m_constraints);
		
		if (allowSleep){
			
			var minSleepTime = Number.MAX_VALUE;
			
			var linTolSqr = b2Settings.b2_linearSleepTolerance * b2Settings.b2_linearSleepTolerance;
			var angTolSqr = b2Settings.b2_angularSleepTolerance * b2Settings.b2_angularSleepTolerance;
			
			for (i = 0; i < this.m_bodyCount; ++i)
			{
				b = this.m_bodies[i];
				if (b.m_invMass == 0.0)
				{
					continue;
				}
				
				if ((b.m_flags & b2Body.e_allowSleepFlag) == 0)
				{
					b.m_sleepTime = 0.0;
					minSleepTime = 0.0;
				}
				
				if ((b.m_flags & b2Body.e_allowSleepFlag) == 0 ||
					b.m_angularVelocity * b.m_angularVelocity > angTolSqr ||
					b2Math.b2Dot(b.m_linearVelocity, b.m_linearVelocity) > linTolSqr)
				{
					b.m_sleepTime = 0.0;
					minSleepTime = 0.0;
				}
				else
				{
					b.m_sleepTime += step.dt;
					minSleepTime = b2Math.b2Min(minSleepTime, b.m_sleepTime);
				}
			}
			
			if (minSleepTime >= b2Settings.b2_timeToSleep)
			{
				for (i = 0; i < this.m_bodyCount; ++i)
				{
					b = this.m_bodies[i];
					b.m_flags |= b2Body.e_sleepFlag;
					b.m_linearVelocity.SetZero();
					b.m_angularVelocity = 0.0;
				}
			}
		}
	}
b2Island.prototype.SolveTOI = function (subStep) {
		var i = 0;
		var contactSolver = new b2ContactSolver(subStep, this.m_contacts, this.m_contactCount, this.m_allocator);
		
		
		
		
		for (i = 0; i < subStep.maxIterations; ++i)
		{
			contactSolver.SolveVelocityConstraints();
		}
		
		
		
		
		
		for (i = 0; i < this.m_bodyCount; ++i)
		{
			var b = this.m_bodies[i];
			
			if (b.IsStatic())
				continue;
			
			
			b.m_sweep.c0.SetV(b.m_sweep.c);
			b.m_sweep.a0 = b.m_sweep.a;
			
			
			b.m_sweep.c.x += subStep.dt * b.m_linearVelocity.x;
			b.m_sweep.c.y += subStep.dt * b.m_linearVelocity.y;
			b.m_sweep.a += subStep.dt * b.m_angularVelocity;
			
			
			b.SynchronizeTransform();
			
			
		}
		
		
		var k_toiBaumgarte = 0.75;
		for (i = 0; i < subStep.maxIterations; ++i)
		{
			var contactsOkay = contactSolver.SolvePositionConstraints(k_toiBaumgarte);
			if (contactsOkay)
			{
				break;
			}
		}
		
		this.Report(contactSolver.m_constraints);
	}
b2Island.prototype.Report = function (constraints) {
		var tMat;
		var tVec;
		if (this.m_listener == null)
		{
			return;
		}
		
		for (var i = 0; i < this.m_contactCount; ++i)
		{
			var c = this.m_contacts[i];
			var cc = constraints[ i ];
			var cr = b2Island.s_reportCR;
			cr.shape1 = c.m_shape1;
			cr.shape2 = c.m_shape2;
			var b1 = cr.shape1.m_body;
			var manifoldCount = c.m_manifoldCount;
			var manifolds = c.GetManifolds();
			for (var j = 0; j < manifoldCount; ++j)
			{
				var manifold = manifolds[ j ];
				cr.normal.SetV( manifold.normal );
				for (var k = 0; k < manifold.pointCount; ++k)
				{
					var point = manifold.points[ k ];
					var ccp = cc.points[ k ];
					cr.position = b1.GetWorldPoint(point.localPoint1);
					
					
					
					cr.normalImpulse = ccp.normalImpulse;
					cr.tangentImpulse = ccp.tangentImpulse;
					cr.id.key = point.id.key;
					
					this.m_listener.Result(cr);
				}
			}
		}
	}
b2Island.prototype.AddBody = function (body) {
		
		this.m_bodies[this.m_bodyCount++] = body;
	}
b2Island.prototype.AddContact = function (contact) {
		
		this.m_contacts[this.m_contactCount++] = contact;
	}
b2Island.prototype.AddJoint = function (joint) {
		
		this.m_joints[this.m_jointCount++] = joint;
	}
exports.b2Island = b2Island;
	
	
var b2ContactEdge = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2ContactEdge.prototype.__constructor = function(){}
b2ContactEdge.prototype.__varz = function(){
}
b2ContactEdge.prototype.other =  null;
b2ContactEdge.prototype.contact =  null;
b2ContactEdge.prototype.prev =  null;
b2ContactEdge.prototype.next =  null;
exports.b2ContactEdge = b2ContactEdge;
	

var b2Contact = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2Contact.prototype.__constructor = function (s1, s2) {
		this.m_flags = 0;
		
		if (!s1 || !s2){
			this.m_shape1 = null;
			this.m_shape2 = null;
			return;
		}
		
		if (s1.IsSensor() || s2.IsSensor())
		{
			this.m_flags |= b2Contact.e_nonSolidFlag;
		}
		
		this.m_shape1 = s1;
		this.m_shape2 = s2;
		
		this.m_manifoldCount = 0;
		
		this.m_friction = Math.sqrt(this.m_shape1.m_friction * this.m_shape2.m_friction);
		this.m_restitution = b2Math.b2Max(this.m_shape1.m_restitution, this.m_shape2.m_restitution);
		
		this.m_prev = null;
		this.m_next = null;
		
		this.m_node1.contact = null;
		this.m_node1.prev = null;
		this.m_node1.next = null;
		this.m_node1.other = null;
		
		this.m_node2.contact = null;
		this.m_node2.prev = null;
		this.m_node2.next = null;
		this.m_node2.other = null;
	}
b2Contact.prototype.__varz = function(){
this.m_node1 =  new b2ContactEdge();
this.m_node2 =  new b2ContactEdge();
}
b2Contact.e_nonSolidFlag =  0x0001;
b2Contact.e_slowFlag =  0x0002;
b2Contact.e_islandFlag =  0x0004;
b2Contact.e_toiFlag =  0x0008;
b2Contact.s_registers =  null;
b2Contact.s_initialized =  false;
b2Contact.AddType = function (createFcn, destroyFcn, type1, type2) {
		
		
		
		b2Contact.s_registers[type1][type2].createFcn = createFcn;
		b2Contact.s_registers[type1][type2].destroyFcn = destroyFcn;
		b2Contact.s_registers[type1][type2].primary = true;
		
		if (type1 != type2)
		{
			b2Contact.s_registers[type2][type1].createFcn = createFcn;
			b2Contact.s_registers[type2][type1].destroyFcn = destroyFcn;
			b2Contact.s_registers[type2][type1].primary = false;
		}
	}
b2Contact.InitializeRegisters = function () {
		b2Contact.s_registers = new Array(b2Shape.e_shapeTypeCount);
		for (var i = 0; i < b2Shape.e_shapeTypeCount; i++){
			b2Contact.s_registers[i] = new Array(b2Shape.e_shapeTypeCount);
			for (var j = 0; j < b2Shape.e_shapeTypeCount; j++){
				b2Contact.s_registers[i][j] = new b2ContactRegister();
			}
		}
		
		b2Contact.AddType(b2CircleContact.Create, b2CircleContact.Destroy, b2Shape.e_circleShape, b2Shape.e_circleShape);
		b2Contact.AddType(b2PolyAndCircleContact.Create, b2PolyAndCircleContact.Destroy, b2Shape.e_polygonShape, b2Shape.e_circleShape);
		b2Contact.AddType(b2PolygonContact.Create, b2PolygonContact.Destroy, b2Shape.e_polygonShape, b2Shape.e_polygonShape);
		
	}
b2Contact.Create = function (shape1, shape2, allocator) {
		if (b2Contact.s_initialized == false)
		{
			b2Contact.InitializeRegisters();
			b2Contact.s_initialized = true;
		}
		
		var type1 = shape1.m_type;
		var type2 = shape2.m_type;
		
		
		
		
		var reg = b2Contact.s_registers[type1][type2];
		var createFcn = reg.createFcn;
		if (createFcn != null)
		{
			if (reg.primary)
			{
				return createFcn(shape1, shape2, allocator);
			}
			else
			{
				var c = createFcn(shape2, shape1, allocator);
				for (var i = 0; i < c.m_manifoldCount; ++i)
				{
					var m = c.GetManifolds()[ i ];
					m.normal = m.normal.Negative();
				}
				return c;
			}
		}
		else
		{
			return null;
		}
	}
b2Contact.Destroy = function (contact, allocator) {
		
		
		if (contact.m_manifoldCount > 0)
		{
			contact.m_shape1.m_body.WakeUp();
			contact.m_shape2.m_body.WakeUp();
		}
		
		var type1 = contact.m_shape1.m_type;
		var type2 = contact.m_shape2.m_type;
		
		
		
		
		var reg = b2Contact.s_registers[type1][type2];
		var destroyFcn = reg.destroyFcn;
		destroyFcn(contact, allocator);
	}
b2Contact.prototype.m_flags =  0;
b2Contact.prototype.m_prev =  null;
b2Contact.prototype.m_next =  null;
b2Contact.prototype.m_node1 =  new b2ContactEdge();
b2Contact.prototype.m_node2 =  new b2ContactEdge();
b2Contact.prototype.m_shape1 =  null;
b2Contact.prototype.m_shape2 =  null;
b2Contact.prototype.m_manifoldCount =  0;
b2Contact.prototype.m_friction =  null;
b2Contact.prototype.m_restitution =  null;
b2Contact.prototype.m_toi =  null;
b2Contact.prototype.GetManifolds = function () {return null}
b2Contact.prototype.GetManifoldCount = function () {
		return this.m_manifoldCount;
	}
b2Contact.prototype.IsSolid = function () {
		return (this.m_flags & b2Contact.e_nonSolidFlag) == 0;
	}
b2Contact.prototype.GetNext = function () {
		return this.m_next;
	}
b2Contact.prototype.GetShape1 = function () {
		return this.m_shape1;
	}
b2Contact.prototype.GetShape2 = function () {
		return this.m_shape2;
	}
b2Contact.prototype.Update = function (listener) {
		var oldCount = this.m_manifoldCount;
		
		this.Evaluate(listener);
		
		var newCount = this.m_manifoldCount;
		
		var body1 = this.m_shape1.m_body;
		var body2 = this.m_shape2.m_body;
		
		if (newCount == 0 && oldCount > 0)
		{
			body1.WakeUp();
			body2.WakeUp();
		}
		
		
		if (body1.IsStatic() || body1.IsBullet() || body2.IsStatic() || body2.IsBullet())
		{
			this.m_flags &= ~b2Contact.e_slowFlag;
		}
		else
		{
			this.m_flags |= b2Contact.e_slowFlag;
		}
	}
b2Contact.prototype.Evaluate = function (listener) {}
exports.b2Contact = b2Contact;
	
	
var b2NullContact = function() {
b2Contact.prototype.__varz.call(this)
this.__varz();
this.__constructor.apply(this, arguments);
}
extend(b2NullContact.prototype, b2Contact.prototype)
b2NullContact.prototype._super = function(){ b2Contact.prototype.__constructor.apply(this, arguments) }
b2NullContact.prototype.__constructor = function () {}
b2NullContact.prototype.__varz = function(){
}
b2NullContact.prototype.Evaluate = function (l) {}
b2NullContact.prototype.GetManifolds = function () { return null; }
exports.b2NullContact = b2NullContact;
	
	
var b2ContactManager = function() {
b2PairCallback.prototype.__varz.call(this)
this.__varz();
this.__constructor.apply(this, arguments);
}
extend(b2ContactManager.prototype, b2PairCallback.prototype)
b2ContactManager.prototype._super = function(){ b2PairCallback.prototype.__constructor.apply(this, arguments) }
b2ContactManager.prototype.__constructor = function () {
		this.m_world = null;
		this.m_destroyImmediate = false;
	}
b2ContactManager.prototype.__varz = function(){
this.m_nullContact =  new b2NullContact();
}
b2ContactManager.s_evalCP =  new b2ContactPoint();
b2ContactManager.prototype.m_world =  null;
b2ContactManager.prototype.m_nullContact =  new b2NullContact();
b2ContactManager.prototype.m_destroyImmediate =  null;
b2ContactManager.prototype.PairAdded = function (proxyUserData1, proxyUserData2) {
		var shape1 = proxyUserData1;
		var shape2 = proxyUserData2;
		
		var body1 = shape1.m_body;
		var body2 = shape2.m_body;
		
		if (body1.IsStatic() && body2.IsStatic())
		{
			return this.m_nullContact;
		}
		
		if (shape1.m_body == shape2.m_body)
		{
			return this.m_nullContact;
		}
		
		if (body2.IsConnected(body1))
		{
			return this.m_nullContact;
		}
		
		if (this.m_world.m_contactFilter != null && this.m_world.m_contactFilter.ShouldCollide(shape1, shape2) == false)
		{
			return this.m_nullContact;
		}
		
		
		var c = b2Contact.Create(shape1, shape2, this.m_world.m_blockAllocator);
		
		if (c == null)
		{
			return this.m_nullContact;
		}
		
		
		shape1 = c.m_shape1;
		shape2 = c.m_shape2;
		body1 = shape1.m_body;
		body2 = shape2.m_body;
		
		
		c.m_prev = null;
		c.m_next = this.m_world.m_contactList;
		if (this.m_world.m_contactList != null)
		{
			this.m_world.m_contactList.m_prev = c;
		}
		this.m_world.m_contactList = c;
		
		
		
		
		
		c.m_node1.contact = c;
		c.m_node1.other = body2;
		
		c.m_node1.prev = null;
		c.m_node1.next = body1.m_contactList;
		if (body1.m_contactList != null)
		{
			body1.m_contactList.prev = c.m_node1;
		}
		body1.m_contactList = c.m_node1;
		
		
		c.m_node2.contact = c;
		c.m_node2.other = body1;
		
		c.m_node2.prev = null;
		c.m_node2.next = body2.m_contactList;
		if (body2.m_contactList != null)
		{
			body2.m_contactList.prev = c.m_node2;
		}
		body2.m_contactList = c.m_node2;
		
		++this.m_world.m_contactCount;
		return c;
		
	}
b2ContactManager.prototype.PairRemoved = function (proxyUserData1, proxyUserData2, pairUserData) {
		
		if (pairUserData == null)
		{
			return;
		}
		
		var c = pairUserData;
		if (c == this.m_nullContact)
		{
			return;
		}
		
		
		
		this.Destroy(c);
	}
b2ContactManager.prototype.Destroy = function (c) {
		
		var shape1 = c.m_shape1;
		var shape2 = c.m_shape2;
		
		
		var manifoldCount = c.m_manifoldCount;
		if (manifoldCount > 0 && this.m_world.m_contactListener)
		{
			var b1 = shape1.m_body;
			var b2 = shape2.m_body;

			var manifolds = c.GetManifolds();
			var cp = b2ContactManager.s_evalCP;
			cp.shape1 = c.m_shape1;
			cp.shape2 = c.m_shape2;
			cp.friction = c.m_friction;
			cp.restitution = c.m_restitution;
			
			for (var i = 0; i < manifoldCount; ++i)
			{
				var manifold = manifolds[ i ];
				cp.normal.SetV(manifold.normal);
				
				for (var j = 0; j < manifold.pointCount; ++j)
				{
					var mp = manifold.points[j];
					cp.position = b1.GetWorldPoint(mp.localPoint1);
					var v1 = b1.GetLinearVelocityFromLocalPoint(mp.localPoint1);
					var v2 = b2.GetLinearVelocityFromLocalPoint(mp.localPoint2);
					cp.velocity.Set(v2.x - v1.x, v2.y - v1.y);
					cp.separation = mp.separation;
					cp.id.key = mp.id._key;
					this.m_world.m_contactListener.Remove(cp);
				}
			}
		}
		
		
		if (c.m_prev)
		{
			c.m_prev.m_next = c.m_next;
		}
		
		if (c.m_next)
		{
			c.m_next.m_prev = c.m_prev;
		}
		
		if (c == this.m_world.m_contactList)
		{
			this.m_world.m_contactList = c.m_next;
		}
		
		var body1 = shape1.m_body;
		var body2 = shape2.m_body;
		
		
		if (c.m_node1.prev)
		{
			c.m_node1.prev.next = c.m_node1.next;
		}
		
		if (c.m_node1.next)
		{
			c.m_node1.next.prev = c.m_node1.prev;
		}
		
		if (c.m_node1 == body1.m_contactList)
		{
			body1.m_contactList = c.m_node1.next;
		}
		
		
		if (c.m_node2.prev)
		{
			c.m_node2.prev.next = c.m_node2.next;
		}
		
		if (c.m_node2.next)
		{
			c.m_node2.next.prev = c.m_node2.prev;
		}
		
		if (c.m_node2 == body2.m_contactList)
		{
			body2.m_contactList = c.m_node2.next;
		}
		
		
		b2Contact.Destroy(c, this.m_world.m_blockAllocator);
		--this.m_world.m_contactCount;
	}
b2ContactManager.prototype.Collide = function () {
		
		for (var c = this.m_world.m_contactList; c; c = c.m_next)
		{
			var body1 = c.m_shape1.m_body;
			var body2 = c.m_shape2.m_body;
			if (body1.IsSleeping() && body2.IsSleeping())
			{
				continue;
			}
			
			c.Update(this.m_world.m_contactListener);
		}
	}
exports.b2ContactManager = b2ContactManager;


var b2ContactSolver = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2ContactSolver.prototype.__constructor = function (step, contacts, contactCount, allocator) {
		var contact;
		
		
		this.m_step.dt = step.dt;
		this.m_step.inv_dt = step.inv_dt;
		this.m_step.maxIterations = step.maxIterations;
		
		this.m_allocator = allocator;
		
		var i = 0;
		var tVec;
		var tMat;
		
		this.m_constraintCount = 0;
		for (i = 0; i < contactCount; ++i)
		{
			
			contact = contacts[i];
			this.m_constraintCount += contact.m_manifoldCount;
		}
		
		
		for (i = 0; i < this.m_constraintCount; i++){
			this.m_constraints[i] = new b2ContactConstraint();
		}
		
		var count = 0;
		for (i = 0; i < contactCount; ++i)
		{
			contact = contacts[i];
			var b1 = contact.m_shape1.m_body;
			var b2 = contact.m_shape2.m_body;
			var manifoldCount = contact.m_manifoldCount;
			var manifolds = contact.GetManifolds();
			var friction = contact.m_friction;
			var restitution = contact.m_restitution;
			
			
			var v1X = b1.m_linearVelocity.x;
			var v1Y = b1.m_linearVelocity.y;
			
			var v2X = b2.m_linearVelocity.x;
			var v2Y = b2.m_linearVelocity.y;
			var w1 = b1.m_angularVelocity;
			var w2 = b2.m_angularVelocity;
			
			for (var j = 0; j < manifoldCount; ++j)
			{
				var manifold = manifolds[ j ];
				
				
				
				
				var normalX = manifold.normal.x;
				var normalY = manifold.normal.y;
				
				
				var c = this.m_constraints[ count ];
				c.body1 = b1; 
				c.body2 = b2; 
				c.manifold = manifold; 
				
				c.normal.x = normalX;
				c.normal.y = normalY;
				c.pointCount = manifold.pointCount;
				c.friction = friction;
				c.restitution = restitution;
				
				for (var k = 0; k < c.pointCount; ++k)
				{
					var cp = manifold.points[ k ];
					var ccp = c.points[ k ];
					
					ccp.normalImpulse = cp.normalImpulse;
					ccp.tangentImpulse = cp.tangentImpulse;
					ccp.separation = cp.separation;
					ccp.positionImpulse = 0.0;
					
					ccp.localAnchor1.SetV(cp.localPoint1);
					ccp.localAnchor2.SetV(cp.localPoint2);
					
					var tX;
					var tY;
					
					
					tMat = b1.m_xf.R;
					var r1X = cp.localPoint1.x - b1.m_sweep.localCenter.x;
					var r1Y = cp.localPoint1.y - b1.m_sweep.localCenter.y;
					tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
					r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
					r1X = tX;
					ccp.r1.Set(r1X,r1Y);
					
					tMat = b2.m_xf.R;
					var r2X = cp.localPoint2.x - b2.m_sweep.localCenter.x;
					var r2Y = cp.localPoint2.y - b2.m_sweep.localCenter.y;
					tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
					r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
					r2X = tX;
					ccp.r2.Set(r2X,r2Y);
					
					var r1Sqr = r1X * r1X + r1Y * r1Y;
					var r2Sqr = r2X * r2X + r2Y * r2Y;
					
					
					var rn1 = r1X*normalX + r1Y*normalY;
					
					var rn2 = r2X*normalX + r2Y*normalY;
					var kNormal = b1.m_invMass + b2.m_invMass;
					kNormal += b1.m_invI * (r1Sqr - rn1 * rn1) + b2.m_invI * (r2Sqr - rn2 * rn2);
					
					ccp.normalMass = 1.0 / kNormal;
					
					var kEqualized = b1.m_mass * b1.m_invMass + b2.m_mass * b2.m_invMass;
					kEqualized += b1.m_mass * b1.m_invI * (r1Sqr - rn1 * rn1) + b2.m_mass * b2.m_invI * (r2Sqr - rn2 * rn2);
					
					ccp.equalizedMass = 1.0 / kEqualized;
					
					
					var tangentX = normalY
					var tangentY = -normalX;
					
					
					var rt1 = r1X*tangentX + r1Y*tangentY;
					
					var rt2 = r2X*tangentX + r2Y*tangentY;
					var kTangent = b1.m_invMass + b2.m_invMass;
					kTangent += b1.m_invI * (r1Sqr - rt1 * rt1) + b2.m_invI * (r2Sqr - rt2 * rt2);
					
					ccp.tangentMass = 1.0 / kTangent;
					
					
					ccp.velocityBias = 0.0;
					if (ccp.separation > 0.0)
					{
						ccp.velocityBias = -60.0 * ccp.separation; 
					}
					
					tX = v2X + (-w2*r2Y) - v1X - (-w1*r1Y);
					tY = v2Y + (w2*r2X) - v1Y - (w1*r1X);
					
					var vRel = c.normal.x*tX + c.normal.y*tY;
					if (vRel < -b2Settings.b2_velocityThreshold)
					{
						ccp.velocityBias += -c.restitution * vRel;
					}
				}
				
				++count;
			}
		}
		
		
	}
b2ContactSolver.prototype.__varz = function(){
this.m_step =  new b2TimeStep();
this.m_constraints =  new Array();
}
b2ContactSolver.prototype.m_step =  new b2TimeStep();
b2ContactSolver.prototype.m_allocator =  null;
b2ContactSolver.prototype.m_constraints =  new Array();
b2ContactSolver.prototype.m_constraintCount =  0;
b2ContactSolver.prototype.InitVelocityConstraints = function (step) {
		var tVec;
		var tVec2;
		var tMat;
		
		
		for (var i = 0; i < this.m_constraintCount; ++i)
		{
			var c = this.m_constraints[ i ];
			
			var b1 = c.body1;
			var b2 = c.body2;
			var invMass1 = b1.m_invMass;
			var invI1 = b1.m_invI;
			var invMass2 = b2.m_invMass;
			var invI2 = b2.m_invI;
			
			var normalX = c.normal.x;
			var normalY = c.normal.y;
			
			var tangentX = normalY;
			var tangentY = -normalX;
			
			var tX;
			
			var j = 0;
			var tCount = 0;
			if (step.warmStarting)
			{
				tCount = c.pointCount;
				for (j = 0; j < tCount; ++j)
				{
					var ccp = c.points[ j ];
					ccp.normalImpulse *= step.dtRatio;
					ccp.tangentImpulse *= step.dtRatio;
					
					var PX = ccp.normalImpulse * normalX + ccp.tangentImpulse * tangentX;
					var PY = ccp.normalImpulse * normalY + ccp.tangentImpulse * tangentY;
					
					
					b1.m_angularVelocity -= invI1 * (ccp.r1.x * PY - ccp.r1.y * PX);
					
					b1.m_linearVelocity.x -= invMass1 * PX;
					b1.m_linearVelocity.y -= invMass1 * PY;
					
					b2.m_angularVelocity += invI2 * (ccp.r2.x * PY - ccp.r2.y * PX);
					
					b2.m_linearVelocity.x += invMass2 * PX;
					b2.m_linearVelocity.y += invMass2 * PY;
				}
			}
			else{
				tCount = c.pointCount;
				for (j = 0; j < tCount; ++j)
				{
					var ccp2 = c.points[ j ];
					ccp2.normalImpulse = 0.0;
					ccp2.tangentImpulse = 0.0;
				}
			}
		}
	}
b2ContactSolver.prototype.SolveVelocityConstraints = function () {
		var j = 0;
		var ccp;
		var r1X;
		var r1Y;
		var r2X;
		var r2Y;
		var dvX;
		var dvY;
		var vn;
		var vt;
		var lambda_n;
		var lambda_t;
		var newImpulse_n;
		var newImpulse_t;
		var PX;
		var PY;
		
		var tMat;
		var tVec;
		
		for (var i = 0; i < this.m_constraintCount; ++i)
		{
			var c = this.m_constraints[ i ];
			var b1 = c.body1;
			var b2 = c.body2;
			var w1 = b1.m_angularVelocity;
			var w2 = b2.m_angularVelocity;
			var v1 = b1.m_linearVelocity;
			var v2 = b2.m_linearVelocity;
			
			var invMass1 = b1.m_invMass;
			var invI1 = b1.m_invI;
			var invMass2 = b2.m_invMass;
			var invI2 = b2.m_invI;
			
			var normalX = c.normal.x;
			var normalY = c.normal.y;
			
			var tangentX = normalY;
			var tangentY = -normalX;
			var friction = c.friction;
			
			var tX;
			
			var tCount = c.pointCount;
			for (j = 0; j < tCount; ++j)
			{
				ccp = c.points[ j ];
				
				
				
				dvX = v2.x + (-w2 * ccp.r2.y) - v1.x - (-w1 * ccp.r1.y);
				dvY = v2.y + (w2 * ccp.r2.x) - v1.y - (w1 * ccp.r1.x);
				
				
				
				vn = dvX * normalX + dvY * normalY;
				lambda_n = -ccp.normalMass * (vn - ccp.velocityBias);
				
				
				vt = dvX*tangentX + dvY*tangentY;
				lambda_t = ccp.tangentMass * (-vt);
				
				
				newImpulse_n = b2Math.b2Max(ccp.normalImpulse + lambda_n, 0.0);
				lambda_n = newImpulse_n - ccp.normalImpulse;
				
				
				var maxFriction = friction * ccp.normalImpulse;
				newImpulse_t = b2Math.b2Clamp(ccp.tangentImpulse + lambda_t, -maxFriction, maxFriction);
				lambda_t = newImpulse_t - ccp.tangentImpulse;
				
				
				
				PX = lambda_n * normalX + lambda_t * tangentX;
				PY = lambda_n * normalY + lambda_t * tangentY;
				
				
				v1.x -= invMass1 * PX;
				v1.y -= invMass1 * PY;
				w1 -= invI1 * (ccp.r1.x * PY - ccp.r1.y * PX);
				
				
				v2.x += invMass2 * PX;
				v2.y += invMass2 * PY;
				w2 += invI2 * (ccp.r2.x * PY - ccp.r2.y * PX);
				
				ccp.normalImpulse = newImpulse_n;
				ccp.tangentImpulse = newImpulse_t;
			}
			
			
			
			
			
			
			b1.m_angularVelocity = w1;
			b2.m_angularVelocity = w2;
		}
	}
b2ContactSolver.prototype.FinalizeVelocityConstraints = function () {
		for (var i = 0; i < this.m_constraintCount; ++i)
		{
			var c = this.m_constraints[ i ];
			var m = c.manifold;
			
			for (var j = 0; j < c.pointCount; ++j)
			{
				var point1 = m.points[j];
				var point2 = c.points[j];
				point1.normalImpulse = point2.normalImpulse;
				point1.tangentImpulse = point2.tangentImpulse;
			}
		}
	}
b2ContactSolver.prototype.SolvePositionConstraints = function (baumgarte) {
		var minSeparation = 0.0;
		
		var tMat;
		var tVec;
		
		for (var i = 0; i < this.m_constraintCount; ++i)
		{
			var c = this.m_constraints[ i ];
			var b1 = c.body1;
			var b2 = c.body2;
			var b1_sweep_c = b1.m_sweep.c;
			var b1_sweep_a = b1.m_sweep.a;
			var b2_sweep_c = b2.m_sweep.c;
			var b2_sweep_a = b2.m_sweep.a;
			
			var invMass1 = b1.m_mass * b1.m_invMass;
			var invI1 = b1.m_mass * b1.m_invI;
			var invMass2 = b2.m_mass * b2.m_invMass;
			var invI2 = b2.m_mass * b2.m_invI;
			
			var normalX = c.normal.x;
			var normalY = c.normal.y;
			
			
			var tCount = c.pointCount;
			for (var j = 0; j < tCount; ++j)
			{
				var ccp = c.points[ j ];
				
				
				tMat = b1.m_xf.R;
				tVec = b1.m_sweep.localCenter;
				var r1X = ccp.localAnchor1.x - tVec.x;
				var r1Y = ccp.localAnchor1.y - tVec.y;
				tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
				r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
				r1X = tX;
				
				
				tMat = b2.m_xf.R;
				tVec = b2.m_sweep.localCenter;
				var r2X = ccp.localAnchor2.x - tVec.x;
				var r2Y = ccp.localAnchor2.y - tVec.y;
				var tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
				r2Y = 			 (tMat.col1.y * r2X + tMat.col2.y * r2Y);
				r2X = tX;
				
				
				var p1X = b1_sweep_c.x + r1X;
				var p1Y = b1_sweep_c.y + r1Y;
				
				
				var p2X = b2_sweep_c.x + r2X;
				var p2Y = b2_sweep_c.y + r2Y;
				
				
				var dpX = p2X - p1X;
				var dpY = p2Y - p1Y;
				
				
				
				var separation = (dpX*normalX + dpY*normalY) + ccp.separation;
				
				
				minSeparation = b2Math.b2Min(minSeparation, separation);
				
				
				var C = baumgarte * b2Math.b2Clamp(separation + b2Settings.b2_linearSlop, -b2Settings.b2_maxLinearCorrection, 0.0);
				
				
				var dImpulse = -ccp.equalizedMass * C;
				
				
				var impulse0 = ccp.positionImpulse;
				ccp.positionImpulse = b2Math.b2Max(impulse0 + dImpulse, 0.0);
				dImpulse = ccp.positionImpulse - impulse0;
				
				
				var impulseX = dImpulse * normalX;
				var impulseY = dImpulse * normalY;
				
				
				b1_sweep_c.x -= invMass1 * impulseX;
				b1_sweep_c.y -= invMass1 * impulseY;
				b1_sweep_a -= invI1 * (r1X * impulseY - r1Y * impulseX);
				b1.m_sweep.a = b1_sweep_a;
				b1.SynchronizeTransform();
				
				
				b2_sweep_c.x += invMass2 * impulseX;
				b2_sweep_c.y += invMass2 * impulseY;
				b2_sweep_a += invI2 * (r2X * impulseY - r2Y * impulseX);
				b2.m_sweep.a = b2_sweep_a;
				b2.SynchronizeTransform();
			}
			
			
			
		}
		
		
		
		return minSeparation >= -1.5 * b2Settings.b2_linearSlop;
	}
exports.b2ContactSolver = b2ContactSolver;


var b2ContactConstraintPoint = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2ContactConstraintPoint.prototype.__constructor = function(){}
b2ContactConstraintPoint.prototype.__varz = function(){
this.localAnchor1 = new b2Vec2();
this.localAnchor2 = new b2Vec2();
this.r1 = new b2Vec2();
this.r2 = new b2Vec2();
}
b2ContactConstraintPoint.prototype.localAnchor1 = new b2Vec2();
b2ContactConstraintPoint.prototype.localAnchor2 = new b2Vec2();
b2ContactConstraintPoint.prototype.r1 = new b2Vec2();
b2ContactConstraintPoint.prototype.r2 = new b2Vec2();
b2ContactConstraintPoint.prototype.normalImpulse =  null;
b2ContactConstraintPoint.prototype.tangentImpulse =  null;
b2ContactConstraintPoint.prototype.positionImpulse =  null;
b2ContactConstraintPoint.prototype.normalMass =  null;
b2ContactConstraintPoint.prototype.tangentMass =  null;
b2ContactConstraintPoint.prototype.equalizedMass =  null;
b2ContactConstraintPoint.prototype.separation =  null;
b2ContactConstraintPoint.prototype.velocityBias =  null;
exports.b2ContactConstraintPoint = b2ContactConstraintPoint;


var b2ContactRegister = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2ContactRegister.prototype.__constructor = function(){}
b2ContactRegister.prototype.__varz = function(){
}
b2ContactRegister.prototype.createFcn =  null;
b2ContactRegister.prototype.destroyFcn =  null;
b2ContactRegister.prototype.primary =  null;
exports.b2ContactRegister = b2ContactRegister;


var b2ContactConstraint = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2ContactConstraint.prototype.__constructor = function () {
		this.points = new Array(b2Settings.b2_maxManifoldPoints);
		for (var i = 0; i < b2Settings.b2_maxManifoldPoints; i++){
			this.points[i] = new b2ContactConstraintPoint();
		}
		
		
	}
b2ContactConstraint.prototype.__varz = function(){
this.normal = new b2Vec2();
}
b2ContactConstraint.prototype.points =  null;
b2ContactConstraint.prototype.normal = new b2Vec2();
b2ContactConstraint.prototype.manifold =  null;
b2ContactConstraint.prototype.body1 =  null;
b2ContactConstraint.prototype.body2 =  null;
b2ContactConstraint.prototype.friction =  null;
b2ContactConstraint.prototype.restitution =  null;
b2ContactConstraint.prototype.pointCount =  0;
exports.b2ContactConstraint = b2ContactConstraint;


var b2PolygonContact = function() {
b2Contact.prototype.__varz.call(this)
this.__varz();
this.__constructor.apply(this, arguments);
}
extend(b2PolygonContact.prototype, b2Contact.prototype)
b2PolygonContact.prototype._super = function(){ b2Contact.prototype.__constructor.apply(this, arguments) }
b2PolygonContact.prototype.__constructor = function (shape1, shape2) {
		this._super(shape1, shape2);
		this.m_manifold = this.m_manifolds[0];
		
		
		this.m_manifold.pointCount = 0;
	}
b2PolygonContact.prototype.__varz = function(){
this.m0 =  new b2Manifold();
this.m_manifolds =  [new b2Manifold()];
}
b2PolygonContact.s_evalCP =  new b2ContactPoint();
b2PolygonContact.Create = function (shape1, shape2, allocator) {
		
		return new b2PolygonContact(shape1, shape2);
	}
b2PolygonContact.Destroy = function (contact, allocator) {
		
		
	}
b2PolygonContact.prototype.m0 =  new b2Manifold();
b2PolygonContact.prototype.m_manifolds =  [new b2Manifold()];
b2PolygonContact.prototype.m_manifold =  null;
b2PolygonContact.prototype.Evaluate = function (listener) {
		var v1;
		var v2;
		var mp0;
		
		var b1 = this.m_shape1.m_body;
		var b2 = this.m_shape2.m_body;
		
		var cp;
		var i = 0;
		
		
		
		
		this.m0.Set(this.m_manifold);
		
		b2Collision.b2CollidePolygons(this.m_manifold, this.m_shape1, b1.m_xf, this.m_shape2, b2.m_xf);
		var persisted = [false, false];
		
		cp = b2PolygonContact.s_evalCP;
		cp.shape1 = this.m_shape1;
		cp.shape2 = this.m_shape2;
		cp.friction = this.m_friction;
		cp.restitution = this.m_restitution;
		
		
		if (this.m_manifold.pointCount > 0)
		{
			
			
			
			for (i = 0; i < this.m_manifold.pointCount; ++i)
			{
				var mp = this.m_manifold.points[ i ];
				mp.normalImpulse = 0.0;
				mp.tangentImpulse = 0.0;
				var found = false;
				var idKey = mp.id._key;
				
				for (var j = 0; j < this.m0.pointCount; ++j)
				{
					if (persisted[j] == true)
					{
						continue;
					}
					
					mp0 = this.m0.points[ j ];
					
					if (mp0.id._key == idKey)
					{
						persisted[j] = true;
						mp.normalImpulse = mp0.normalImpulse;
						mp.tangentImpulse = mp0.tangentImpulse;
	
						
						found = true;
	
						
						if (listener != null)
						{
							cp.position = b1.GetWorldPoint(mp.localPoint1);
							v1 = b1.GetLinearVelocityFromLocalPoint(mp.localPoint1);
							v2 = b2.GetLinearVelocityFromLocalPoint(mp.localPoint2);
							cp.velocity.Set(v2.x - v1.x, v2.y - v1.y);
							cp.normal.SetV(this.m_manifold.normal);
							cp.separation = mp.separation;
							cp.id.key = idKey;
							listener.Persist(cp);
						}
						break;
					}
				}
				
				
				if (found == false && listener != null)
				{
					cp.position = b1.GetWorldPoint(mp.localPoint1);
					v1 = b1.GetLinearVelocityFromLocalPoint(mp.localPoint1);
					v2 = b2.GetLinearVelocityFromLocalPoint(mp.localPoint2);
					cp.velocity.Set(v2.x - v1.x, v2.y - v1.y);
					cp.normal.SetV(this.m_manifold.normal);
					cp.separation = mp.separation;
					cp.id.key = idKey;
					listener.Add(cp);
				}
			}
			
			this.m_manifoldCount = 1;
		}
		else
		{
			this.m_manifoldCount = 0;
		}
		
		if (listener == null)
		{
			return;
		}
		
		
		for (i = 0; i < this.m0.pointCount; ++i)
		{
			if (persisted[i])
			{
				continue;
			}
	
			mp0 = this.m0.points[ i ];
			cp.position = b1.GetWorldPoint(mp0.localPoint1);
			v1 = b1.GetLinearVelocityFromLocalPoint(mp0.localPoint1);
			v2 = b2.GetLinearVelocityFromLocalPoint(mp0.localPoint2);
			cp.velocity.Set(v2.x - v1.x, v2.y - v1.y);
			cp.normal.SetV(this.m0.normal);
			cp.separation = mp0.separation;
			cp.id.key = mp0.id._key;
			listener.Remove(cp);
		}
	}
b2PolygonContact.prototype.GetManifolds = function () {
		return this.m_manifolds;
	}
exports.b2PolygonContact = b2PolygonContact;
	
	
var b2CircleContact = function() {
b2Contact.prototype.__varz.call(this)
this.__varz();
this.__constructor.apply(this, arguments);
}
extend(b2CircleContact.prototype, b2Contact.prototype)
b2CircleContact.prototype._super = function(){ b2Contact.prototype.__constructor.apply(this, arguments) }
b2CircleContact.prototype.__constructor = function (shape1, shape2) {
		this._super(shape1, shape2);
		
		this.m_manifold = this.m_manifolds[0];
		
		
		
		this.m_manifold.pointCount = 0;
		var point = this.m_manifold.points[0];
		point.normalImpulse = 0.0;
		point.tangentImpulse = 0.0;
	}
b2CircleContact.prototype.__varz = function(){
this.m_manifolds =  [new b2Manifold()];
this.m0 =  new b2Manifold();
}
b2CircleContact.s_evalCP =  new b2ContactPoint();
b2CircleContact.Create = function (shape1, shape2, allocator) {
		return new b2CircleContact(shape1, shape2);
	}
b2CircleContact.Destroy = function (contact, allocator) {
		
	}
b2CircleContact.prototype.m_manifolds =  [new b2Manifold()];
b2CircleContact.prototype.m0 =  new b2Manifold();
b2CircleContact.prototype.m_manifold =  null;
b2CircleContact.prototype.Evaluate = function (listener) {
		var v1;
		var v2;
		var mp0;
		
		var b1 = this.m_shape1.m_body;
		var b2 = this.m_shape2.m_body;
		
		
		
		
		this.m0.Set(this.m_manifold);
		
		b2Collision.b2CollideCircles(this.m_manifold, this.m_shape1, b1.m_xf, this.m_shape2, b2.m_xf);
		
		var cp = b2CircleContact.s_evalCP;
		cp.shape1 = this.m_shape1;
		cp.shape2 = this.m_shape2;
		cp.friction = this.m_friction;
		cp.restitution = this.m_restitution;
		
		if (this.m_manifold.pointCount > 0)
		{
			this.m_manifoldCount = 1;
			var mp = this.m_manifold.points[ 0 ];
			
			if (this.m0.pointCount == 0)
			{
				mp.normalImpulse = 0.0;
				mp.tangentImpulse = 0.0;
	
				if (listener)
				{
					cp.position = b1.GetWorldPoint(mp.localPoint1);
					v1 = b1.GetLinearVelocityFromLocalPoint(mp.localPoint1);
					v2 = b2.GetLinearVelocityFromLocalPoint(mp.localPoint2);
					cp.velocity.Set(v2.x - v1.x, v2.y - v1.y);
					cp.normal.SetV(this.m_manifold.normal);
					cp.separation = mp.separation;
					cp.id.key = mp.id._key;
					listener.Add(cp);
				}
			} else
			{
				mp0 = this.m0.points[ 0 ];
				mp.normalImpulse = mp0.normalImpulse;
				mp.tangentImpulse = mp0.tangentImpulse;
				
				if (listener)
				{
					cp.position = b1.GetWorldPoint(mp.localPoint1);
					v1 = b1.GetLinearVelocityFromLocalPoint(mp.localPoint1);
					v2 = b2.GetLinearVelocityFromLocalPoint(mp.localPoint2);
					cp.velocity.Set(v2.x - v1.x, v2.y - v1.y);
					cp.normal.SetV(this.m_manifold.normal);
					cp.separation = mp.separation;
					cp.id.key = mp.id._key;
					listener.Persist(cp);
				}
			}
		}
		else
		{
			this.m_manifoldCount = 0;
			if (this.m0.pointCount > 0 && listener)
			{
				mp0 = this.m0.points[ 0 ];
				cp.position = b1.GetWorldPoint(mp0.localPoint1);
				v1 = b1.GetLinearVelocityFromLocalPoint(mp0.localPoint1);
				v2 = b2.GetLinearVelocityFromLocalPoint(mp0.localPoint2);
				cp.velocity.Set(v2.x - v1.x, v2.y - v1.y);
				cp.normal.SetV(this.m0.normal);
				cp.separation = mp0.separation;
				cp.id.key = mp0.id._key;
				listener.Remove(cp);
			}
		}
	}
b2CircleContact.prototype.GetManifolds = function () {
		return this.m_manifolds;
	}
exports.b2CircleContact = b2CircleContact;

	
var b2PolyAndCircleContact = function() {
b2Contact.prototype.__varz.call(this)
this.__varz();
this.__constructor.apply(this, arguments);
}
extend(b2PolyAndCircleContact.prototype, b2Contact.prototype)
b2PolyAndCircleContact.prototype._super = function(){ b2Contact.prototype.__constructor.apply(this, arguments) }
b2PolyAndCircleContact.prototype.__constructor = function (shape1, shape2) {
		this._super(shape1, shape2);
		
		this.m_manifold = this.m_manifolds[0];
		
		b2Settings.b2Assert(this.m_shape1.m_type == b2Shape.e_polygonShape);
		b2Settings.b2Assert(this.m_shape2.m_type == b2Shape.e_circleShape);
		this.m_manifold.pointCount = 0;
		var point = this.m_manifold.points[0];
		point.normalImpulse = 0.0;
		point.tangentImpulse = 0.0;
	}
b2PolyAndCircleContact.prototype.__varz = function(){
this.m_manifolds =  [new b2Manifold()];
this.m0 =  new b2Manifold();
}
b2PolyAndCircleContact.s_evalCP =  new b2ContactPoint();
b2PolyAndCircleContact.Create = function (shape1, shape2, allocator) {
		return new b2PolyAndCircleContact(shape1, shape2);
	}
b2PolyAndCircleContact.Destroy = function (contact, allocator) {
	}
b2PolyAndCircleContact.prototype.m_manifolds =  [new b2Manifold()];
b2PolyAndCircleContact.prototype.m0 =  new b2Manifold();
b2PolyAndCircleContact.prototype.m_manifold =  null;
b2PolyAndCircleContact.prototype.Evaluate = function (listener) {
		var i = 0;
		var v1;
		var v2;
		var mp0;
		
		var b1 = this.m_shape1.m_body;
		var b2 = this.m_shape2.m_body;
		
		
		
		
		this.m0.Set(this.m_manifold);
		
		b2Collision.b2CollidePolygonAndCircle(this.m_manifold, this.m_shape1, b1.m_xf, this.m_shape2, b2.m_xf);
		
		var persisted = [false, false];
		
		var cp = b2PolyAndCircleContact.s_evalCP;
		cp.shape1 = this.m_shape1;
		cp.shape2 = this.m_shape2;
		cp.friction = this.m_friction;
		cp.restitution = this.m_restitution;
		
		
		if (this.m_manifold.pointCount > 0)
		{
			
			
			for (i = 0; i < this.m_manifold.pointCount; ++i)
			{
				var mp = this.m_manifold.points[ i ];
				mp.normalImpulse = 0.0;
				mp.tangentImpulse = 0.0;
				var found = false;
				var idKey = mp.id._key;
	
				for (var j = 0; j < this.m0.pointCount; ++j)
				{
					if (persisted[j] == true)
					{
						continue;
					}
	
					mp0 = this.m0.points[ j ];
	
					if (mp0.id._key == idKey)
					{
						persisted[j] = true;
						mp.normalImpulse = mp0.normalImpulse;
						mp.tangentImpulse = mp0.tangentImpulse;
	
						
						found = true;
	
						
						if (listener != null)
						{
							cp.position = b1.GetWorldPoint(mp.localPoint1);
							v1 = b1.GetLinearVelocityFromLocalPoint(mp.localPoint1);
							v2 = b2.GetLinearVelocityFromLocalPoint(mp.localPoint2);
							cp.velocity.Set(v2.x - v1.x, v2.y - v1.y);
							cp.normal.SetV(this.m_manifold.normal);
							cp.separation = mp.separation;
							cp.id.key = idKey;
							listener.Persist(cp);
						}
						break;
					}
				}
	
				
				if (found == false && listener != null)
				{
					cp.position = b1.GetWorldPoint(mp.localPoint1);
					v1 = b1.GetLinearVelocityFromLocalPoint(mp.localPoint1);
					v2 = b2.GetLinearVelocityFromLocalPoint(mp.localPoint2);
					cp.velocity.Set(v2.x - v1.x, v2.y - v1.y);
					cp.normal.SetV(this.m_manifold.normal);
					cp.separation = mp.separation;
					cp.id.key = idKey;
					listener.Add(cp);
				}
			}
	
			this.m_manifoldCount = 1;
		}
		else
		{
			this.m_manifoldCount = 0;
		}
		
		if (listener == null)
		{
			return;
		}
		
		
		for (i = 0; i < this.m0.pointCount; ++i)
		{
			if (persisted[i])
			{
				continue;
			}
			
			mp0 = this.m0.points[ i ];
			cp.position = b1.GetWorldPoint(mp0.localPoint1);
			v1 = b1.GetLinearVelocityFromLocalPoint(mp0.localPoint1);
			v2 = b2.GetLinearVelocityFromLocalPoint(mp0.localPoint2);
			cp.velocity.Set(v2.x - v1.x, v2.y - v1.y);
			cp.normal.SetV(this.m0.normal);
			cp.separation = mp0.separation;
			cp.id.key = mp0.id._key;
			listener.Remove(cp);
		}
	}
b2PolyAndCircleContact.prototype.GetManifolds = function () {
		return this.m_manifolds;
	}
exports.b2PolyAndCircleContact = b2PolyAndCircleContact;
	
	
var b2JointEdge = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2JointEdge.prototype.__constructor = function(){}
b2JointEdge.prototype.__varz = function(){
}
b2JointEdge.prototype.other =  null;
b2JointEdge.prototype.joint =  null;
b2JointEdge.prototype.prev =  null;
b2JointEdge.prototype.next =  null;
exports.b2JointEdge = b2JointEdge;


var b2JointDef = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2JointDef.prototype.__constructor = function () {
		this.type = b2Joint.e_unknownJoint;
		this.userData = null;
		this.body1 = null;
		this.body2 = null;
		this.collideConnected = false;
	}
b2JointDef.prototype.__varz = function(){
}
b2JointDef.prototype.type =  0;
b2JointDef.prototype.userData =  null;
b2JointDef.prototype.body1 =  null;
b2JointDef.prototype.body2 =  null;
b2JointDef.prototype.collideConnected =  null;
exports.b2JointDef = b2JointDef;


var b2MouseJointDef = function() {
b2JointDef.prototype.__varz.call(this)
this.__varz();
this.__constructor.apply(this, arguments);
}
extend(b2MouseJointDef.prototype, b2JointDef.prototype)
b2MouseJointDef.prototype._super = function(){ b2JointDef.prototype.__constructor.apply(this, arguments) }
b2MouseJointDef.prototype.__constructor = function () {
		this.type = b2Joint.e_mouseJoint;
		this.maxForce = 0.0;
		this.frequencyHz = 5.0;
		this.dampingRatio = 0.7;
		this.timeStep = 1.0 / 60.0;
	}
b2MouseJointDef.prototype.__varz = function(){
this.target =  new b2Vec2();
}
b2MouseJointDef.prototype.target =  new b2Vec2();
b2MouseJointDef.prototype.maxForce =  null;
b2MouseJointDef.prototype.frequencyHz =  null;
b2MouseJointDef.prototype.dampingRatio =  null;
b2MouseJointDef.prototype.timeStep =  null;
exports.b2MouseJointDef = b2MouseJointDef;


var b2PulleyJointDef = function() {
b2JointDef.prototype.__varz.call(this)
this.__varz();
this.__constructor.apply(this, arguments);
}
extend(b2PulleyJointDef.prototype, b2JointDef.prototype)
b2PulleyJointDef.prototype._super = function(){ b2JointDef.prototype.__constructor.apply(this, arguments) }
b2PulleyJointDef.prototype.__constructor = function () {
		this.type = b2Joint.e_pulleyJoint;
		this.groundAnchor1.Set(-1.0, 1.0);
		this.groundAnchor2.Set(1.0, 1.0);
		this.localAnchor1.Set(-1.0, 0.0);
		this.localAnchor2.Set(1.0, 0.0);
		this.length1 = 0.0;
		this.maxLength1 = 0.0;
		this.length2 = 0.0;
		this.maxLength2 = 0.0;
		this.ratio = 1.0;
		this.collideConnected = true;
	}
b2PulleyJointDef.prototype.__varz = function(){
this.groundAnchor1 =  new b2Vec2();
this.groundAnchor2 =  new b2Vec2();
this.localAnchor1 =  new b2Vec2();
this.localAnchor2 =  new b2Vec2();
}
b2PulleyJointDef.prototype.groundAnchor1 =  new b2Vec2();
b2PulleyJointDef.prototype.groundAnchor2 =  new b2Vec2();
b2PulleyJointDef.prototype.localAnchor1 =  new b2Vec2();
b2PulleyJointDef.prototype.localAnchor2 =  new b2Vec2();
b2PulleyJointDef.prototype.length1 =  null;
b2PulleyJointDef.prototype.maxLength1 =  null;
b2PulleyJointDef.prototype.length2 =  null;
b2PulleyJointDef.prototype.maxLength2 =  null;
b2PulleyJointDef.prototype.ratio =  null;
b2PulleyJointDef.prototype.Initialize = function (b1, b2,
				ga1, ga2,
				anchor1, anchor2,
				r) {
		this.body1 = b1;
		this.body2 = b2;
		this.groundAnchor1.SetV( ga1 );
		this.groundAnchor2.SetV( ga2 );
		this.localAnchor1 = this.body1.GetLocalPoint(anchor1);
		this.localAnchor2 = this.body2.GetLocalPoint(anchor2);
		
		var d1X = anchor1.x - ga1.x;
		var d1Y = anchor1.y - ga1.y;
		
		this.length1 = Math.sqrt(d1X*d1X + d1Y*d1Y);
		
		
		var d2X = anchor2.x - ga2.x;
		var d2Y = anchor2.y - ga2.y;
		
		this.length2 = Math.sqrt(d2X*d2X + d2Y*d2Y);
		
		this.ratio = r;
		
		var C = this.length1 + this.ratio * this.length2;
		this.maxLength1 = C - this.ratio * b2PulleyJoint.b2_minPulleyLength;
		this.maxLength2 = (C - b2PulleyJoint.b2_minPulleyLength) / this.ratio;
	}
exports.b2PulleyJointDef = b2PulleyJointDef;
	
	
var b2Jacobian = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2Jacobian.prototype.__constructor = function(){}
b2Jacobian.prototype.__varz = function(){
this.linear1 =  new b2Vec2();
this.linear2 =  new b2Vec2();
}
b2Jacobian.prototype.linear1 =  new b2Vec2();
b2Jacobian.prototype.angular1 =  null;
b2Jacobian.prototype.linear2 =  new b2Vec2();
b2Jacobian.prototype.angular2 =  null;
b2Jacobian.prototype.SetZero = function () {
		this.linear1.SetZero(); this.angular1 = 0.0;
		this.linear2.SetZero(); this.angular2 = 0.0;
	}
b2Jacobian.prototype.Set = function (x1, a1, x2, a2) {
		this.linear1.SetV(x1); this.angular1 = a1;
		this.linear2.SetV(x2); this.angular2 = a2;
	}
b2Jacobian.prototype.Compute = function (x1, a1, x2, a2) {
		
		
		return (this.linear1.x*x1.x + this.linear1.y*x1.y) + this.angular1 * a1 + (this.linear2.x*x2.x + this.linear2.y*x2.y) + this.angular2 * a2;
	}
exports.b2Jacobian = b2Jacobian;
	
	
var b2DistanceJointDef = function() {
b2JointDef.prototype.__varz.call(this)
this.__varz();
this.__constructor.apply(this, arguments);
}
extend(b2DistanceJointDef.prototype, b2JointDef.prototype)
b2DistanceJointDef.prototype._super = function(){ b2JointDef.prototype.__constructor.apply(this, arguments) }
b2DistanceJointDef.prototype.__constructor = function () {
		this.type = b2Joint.e_distanceJoint;
		
		
		this.length = 1.0;
		this.frequencyHz = 0.0;
		this.dampingRatio = 0.0;
	}
b2DistanceJointDef.prototype.__varz = function(){
this.localAnchor1 =  new b2Vec2();
this.localAnchor2 =  new b2Vec2();
}
b2DistanceJointDef.prototype.localAnchor1 =  new b2Vec2();
b2DistanceJointDef.prototype.localAnchor2 =  new b2Vec2();
b2DistanceJointDef.prototype.length =  null;
b2DistanceJointDef.prototype.frequencyHz =  null;
b2DistanceJointDef.prototype.dampingRatio =  null;
b2DistanceJointDef.prototype.Initialize = function (b1, b2,
								anchor1, anchor2) {
		this.body1 = b1;
		this.body2 = b2;
		this.localAnchor1.SetV( this.body1.GetLocalPoint(anchor1));
		this.localAnchor2.SetV( this.body2.GetLocalPoint(anchor2));
		var dX = anchor2.x - anchor1.x;
		var dY = anchor2.y - anchor1.y;
		this.length = Math.sqrt(dX*dX + dY*dY);
		this.frequencyHz = 0.0;
		this.dampingRatio = 0.0;
	}
exports.b2DistanceJointDef = b2DistanceJointDef;
	
	
var b2PrismaticJointDef = function() {
b2JointDef.prototype.__varz.call(this)
this.__varz();
this.__constructor.apply(this, arguments);
}
extend(b2PrismaticJointDef.prototype, b2JointDef.prototype)
b2PrismaticJointDef.prototype._super = function(){ b2JointDef.prototype.__constructor.apply(this, arguments) }
b2PrismaticJointDef.prototype.__constructor = function () {
		this.type = b2Joint.e_prismaticJoint;
		
		
		this.localAxis1.Set(1.0, 0.0);
		this.referenceAngle = 0.0;
		this.enableLimit = false;
		this.lowerTranslation = 0.0;
		this.upperTranslation = 0.0;
		this.enableMotor = false;
		this.maxMotorForce = 0.0;
		this.motorSpeed = 0.0;
	}
b2PrismaticJointDef.prototype.__varz = function(){
this.localAnchor1 =  new b2Vec2();
this.localAnchor2 =  new b2Vec2();
this.localAxis1 =  new b2Vec2();
}
b2PrismaticJointDef.prototype.localAnchor1 =  new b2Vec2();
b2PrismaticJointDef.prototype.localAnchor2 =  new b2Vec2();
b2PrismaticJointDef.prototype.localAxis1 =  new b2Vec2();
b2PrismaticJointDef.prototype.referenceAngle =  null;
b2PrismaticJointDef.prototype.enableLimit =  null;
b2PrismaticJointDef.prototype.lowerTranslation =  null;
b2PrismaticJointDef.prototype.upperTranslation =  null;
b2PrismaticJointDef.prototype.enableMotor =  null;
b2PrismaticJointDef.prototype.maxMotorForce =  null;
b2PrismaticJointDef.prototype.motorSpeed =  null;
b2PrismaticJointDef.prototype.Initialize = function (b1, b2, anchor, axis) {
		this.body1 = b1;
		this.body2 = b2;
		this.localAnchor1 = this.body1.GetLocalPoint(anchor);
		this.localAnchor2 = this.body2.GetLocalPoint(anchor);
		this.localAxis1 = this.body1.GetLocalVector(axis);
		this.referenceAngle = this.body2.GetAngle() - this.body1.GetAngle();
	}
exports.b2PrismaticJointDef = b2PrismaticJointDef;
	
	
var b2RevoluteJointDef = function() {
b2JointDef.prototype.__varz.call(this)
this.__varz();
this.__constructor.apply(this, arguments);
}
extend(b2RevoluteJointDef.prototype, b2JointDef.prototype)
b2RevoluteJointDef.prototype._super = function(){ b2JointDef.prototype.__constructor.apply(this, arguments) }
b2RevoluteJointDef.prototype.__constructor = function () {
		this.type = b2Joint.e_revoluteJoint;
		this.localAnchor1.Set(0.0, 0.0);
		this.localAnchor2.Set(0.0, 0.0);
		this.referenceAngle = 0.0;
		this.lowerAngle = 0.0;
		this.upperAngle = 0.0;
		this.maxMotorTorque = 0.0;
		this.motorSpeed = 0.0;
		this.enableLimit = false;
		this.enableMotor = false;
	}
b2RevoluteJointDef.prototype.__varz = function(){
this.localAnchor1 =  new b2Vec2();
this.localAnchor2 =  new b2Vec2();
}
b2RevoluteJointDef.prototype.localAnchor1 =  new b2Vec2();
b2RevoluteJointDef.prototype.localAnchor2 =  new b2Vec2();
b2RevoluteJointDef.prototype.referenceAngle =  null;
b2RevoluteJointDef.prototype.enableLimit =  null;
b2RevoluteJointDef.prototype.lowerAngle =  null;
b2RevoluteJointDef.prototype.upperAngle =  null;
b2RevoluteJointDef.prototype.enableMotor =  null;
b2RevoluteJointDef.prototype.motorSpeed =  null;
b2RevoluteJointDef.prototype.maxMotorTorque =  null;
b2RevoluteJointDef.prototype.Initialize = function (b1, b2, anchor) {
		this.body1 = b1;
		this.body2 = b2;
		this.localAnchor1 = this.body1.GetLocalPoint(anchor);
		this.localAnchor2 = this.body2.GetLocalPoint(anchor);
		this.referenceAngle = this.body2.GetAngle() - this.body1.GetAngle();
	}
exports.b2RevoluteJointDef = b2RevoluteJointDef;
	
	
var b2Joint = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2Joint.prototype.__constructor = function (def) {
		this.m_type = def.type;
		this.m_prev = null;
		this.m_next = null;
		this.m_body1 = def.body1;
		this.m_body2 = def.body2;
		this.m_collideConnected = def.collideConnected;
		this.m_islandFlag = false;
		this.m_userData = def.userData;
	}
b2Joint.prototype.__varz = function(){
this.m_node1 =  new b2JointEdge();
this.m_node2 =  new b2JointEdge();
}
b2Joint.e_unknownJoint =  0;
b2Joint.e_revoluteJoint =  1;
b2Joint.e_prismaticJoint =  2;
b2Joint.e_distanceJoint =  3;
b2Joint.e_pulleyJoint =  4;
b2Joint.e_mouseJoint =  5;
b2Joint.e_gearJoint =  6;
b2Joint.e_inactiveLimit =  0;
b2Joint.e_atLowerLimit =  1;
b2Joint.e_atUpperLimit =  2;
b2Joint.e_equalLimits =  3;
b2Joint.Create = function (def, allocator) {
		var joint = null;
		
		switch (def.type)
		{
		case b2Joint.e_distanceJoint:
			{
				
				joint = new b2DistanceJoint(def);
			}
			break;
		
		case b2Joint.e_mouseJoint:
			{
				
				joint = new b2MouseJoint(def);
			}
			break;
		
		case b2Joint.e_prismaticJoint:
			{
				
				joint = new b2PrismaticJoint(def);
			}
			break;
		
		case b2Joint.e_revoluteJoint:
			{
				
				joint = new b2RevoluteJoint(def);
			}
			break;
		
		case b2Joint.e_pulleyJoint:
			{
				
				joint = new b2PulleyJoint(def);
			}
			break;
		
		case b2Joint.e_gearJoint:
			{
				
				joint = new b2GearJoint(def);
			}
			break;
		
		default:
			
			break;
		}
		
		return joint;
	}
b2Joint.Destroy = function (joint, allocator) {
		
	}
b2Joint.prototype.m_type =  0;
b2Joint.prototype.m_prev =  null;
b2Joint.prototype.m_next =  null;
b2Joint.prototype.m_node1 =  new b2JointEdge();
b2Joint.prototype.m_node2 =  new b2JointEdge();
b2Joint.prototype.m_body1 =  null;
b2Joint.prototype.m_body2 =  null;
b2Joint.prototype.m_inv_dt =  null;
b2Joint.prototype.m_islandFlag =  null;
b2Joint.prototype.m_collideConnected =  null;
b2Joint.prototype.m_userData =  null;
b2Joint.prototype.GetType = function () {
		return this.m_type;
	}
b2Joint.prototype.GetAnchor1 = function () {return null}
b2Joint.prototype.GetAnchor2 = function () {return null}
b2Joint.prototype.GetReactionForce = function () {return null}
b2Joint.prototype.GetReactionTorque = function () {return 0.0}
b2Joint.prototype.GetBody1 = function () {
		return this.m_body1;
	}
b2Joint.prototype.GetBody2 = function () {
		return this.m_body2;
	}
b2Joint.prototype.GetNext = function () {
		return this.m_next;
	}
b2Joint.prototype.GetUserData = function () {
		return this.m_userData;
	}
b2Joint.prototype.SetUserData = function (data) {
		this.m_userData = data;
	}
b2Joint.prototype.InitVelocityConstraints = function (step) {}
b2Joint.prototype.SolveVelocityConstraints = function (step) {}
b2Joint.prototype.InitPositionConstraints = function () {}
b2Joint.prototype.SolvePositionConstraints = function () {return false}
exports.b2Joint = b2Joint;


var b2GearJoint = function() {
b2Joint.prototype.__varz.call(this)
this.__varz();
this.__constructor.apply(this, arguments);
}
extend(b2GearJoint.prototype, b2Joint.prototype)
b2GearJoint.prototype._super = function(){ b2Joint.prototype.__constructor.apply(this, arguments) }
b2GearJoint.prototype.__constructor = function (def) {
		
		this._super(def);
		
		var type1 = def.joint1.m_type;
		var type2 = def.joint2.m_type;
		
		
		
		
		
		
		this.m_revolute1 = null;
		this.m_prismatic1 = null;
		this.m_revolute2 = null;
		this.m_prismatic2 = null;
		
		var coordinate1;
		var coordinate2;
		
		this.m_ground1 = def.joint1.m_body1;
		this.m_body1 = def.joint1.m_body2;
		if (type1 == b2Joint.e_revoluteJoint)
		{
			this.m_revolute1 = def.joint1;
			this.m_groundAnchor1.SetV( this.m_revolute1.m_localAnchor1 );
			this.m_localAnchor1.SetV( this.m_revolute1.m_localAnchor2 );
			coordinate1 = this.m_revolute1.GetJointAngle();
		}
		else
		{
			this.m_prismatic1 = def.joint1;
			this.m_groundAnchor1.SetV( this.m_prismatic1.m_localAnchor1 );
			this.m_localAnchor1.SetV( this.m_prismatic1.m_localAnchor2 );
			coordinate1 = this.m_prismatic1.GetJointTranslation();
		}
		
		this.m_ground2 = def.joint2.m_body1;
		this.m_body2 = def.joint2.m_body2;
		if (type2 == b2Joint.e_revoluteJoint)
		{
			this.m_revolute2 = def.joint2;
			this.m_groundAnchor2.SetV( this.m_revolute2.m_localAnchor1 );
			this.m_localAnchor2.SetV( this.m_revolute2.m_localAnchor2 );
			coordinate2 = this.m_revolute2.GetJointAngle();
		}
		else
		{
			this.m_prismatic2 = def.joint2;
			this.m_groundAnchor2.SetV( this.m_prismatic2.m_localAnchor1 );
			this.m_localAnchor2.SetV( this.m_prismatic2.m_localAnchor2 );
			coordinate2 = this.m_prismatic2.GetJointTranslation();
		}
		
		this.m_ratio = def.ratio;
		
		this.m_constant = coordinate1 + this.m_ratio * coordinate2;
		
		this.m_force = 0.0;
		
	}
b2GearJoint.prototype.__varz = function(){
this.m_groundAnchor1 =  new b2Vec2();
this.m_groundAnchor2 =  new b2Vec2();
this.m_localAnchor1 =  new b2Vec2();
this.m_localAnchor2 =  new b2Vec2();
this.m_J =  new b2Jacobian();
}
b2GearJoint.prototype.m_ground1 =  null;
b2GearJoint.prototype.m_ground2 =  null;
b2GearJoint.prototype.m_revolute1 =  null;
b2GearJoint.prototype.m_prismatic1 =  null;
b2GearJoint.prototype.m_revolute2 =  null;
b2GearJoint.prototype.m_prismatic2 =  null;
b2GearJoint.prototype.m_groundAnchor1 =  new b2Vec2();
b2GearJoint.prototype.m_groundAnchor2 =  new b2Vec2();
b2GearJoint.prototype.m_localAnchor1 =  new b2Vec2();
b2GearJoint.prototype.m_localAnchor2 =  new b2Vec2();
b2GearJoint.prototype.m_J =  new b2Jacobian();
b2GearJoint.prototype.m_constant =  null;
b2GearJoint.prototype.m_ratio =  null;
b2GearJoint.prototype.m_mass =  null;
b2GearJoint.prototype.m_force =  null;
b2GearJoint.prototype.GetAnchor1 = function () {
		
		return this.m_body1.GetWorldPoint(this.m_localAnchor1);
	}
b2GearJoint.prototype.GetAnchor2 = function () {
		
		return this.m_body2.GetWorldPoint(this.m_localAnchor2);
	}
b2GearJoint.prototype.GetReactionForce = function () {
		
		var F = new b2Vec2(this.m_force * this.m_J.linear2.x, this.m_force * this.m_J.linear2.y);
		return F;
	}
b2GearJoint.prototype.GetReactionTorque = function () {
		
		
		var tMat = this.m_body2.m_xf.R;
		var rX = this.m_localAnchor1.x - this.m_body2.m_sweep.localCenter.x;
		var rY = this.m_localAnchor1.y - this.m_body2.m_sweep.localCenter.y;
		var tX = tMat.col1.x * rX + tMat.col2.x * rY;
		rY = tMat.col1.y * rX + tMat.col2.y * rY;
		rX = tX;
		
		
		tX = this.m_force * this.m_J.angular2 - (rX * (this.m_force * this.m_J.linear2.y) - rY * (this.m_force * this.m_J.linear2.x));
		return tX;
	}
b2GearJoint.prototype.GetRatio = function () {
		return this.m_ratio;
	}
b2GearJoint.prototype.InitVelocityConstraints = function (step) {
		var g1 = this.m_ground1;
		var g2 = this.m_ground2;
		var b1 = this.m_body1;
		var b2 = this.m_body2;
		
		
		var ugX;
		var ugY;
		var rX;
		var rY;
		var tMat;
		var tVec;
		var crug;
		var tX;
		
		var K = 0.0;
		this.m_J.SetZero();
		
		if (this.m_revolute1)
		{
			this.m_J.angular1 = -1.0;
			K += b1.m_invI;
		}
		else
		{
			
			tMat = g1.m_xf.R;
			tVec = this.m_prismatic1.m_localXAxis1;
			ugX = tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
			ugY = tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
			
			tMat = b1.m_xf.R;
			rX = this.m_localAnchor1.x - b1.m_sweep.localCenter.x;
			rY = this.m_localAnchor1.y - b1.m_sweep.localCenter.y;
			tX = tMat.col1.x * rX + tMat.col2.x * rY;
			rY = tMat.col1.y * rX + tMat.col2.y * rY;
			rX = tX;
			
			
			crug = rX * ugY - rY * ugX;
			
			this.m_J.linear1.Set(-ugX, -ugY);
			this.m_J.angular1 = -crug;
			K += b1.m_invMass + b1.m_invI * crug * crug;
		}
		
		if (this.m_revolute2)
		{
			this.m_J.angular2 = -this.m_ratio;
			K += this.m_ratio * this.m_ratio * b2.m_invI;
		}
		else
		{
			
			tMat = g2.m_xf.R;
			tVec = this.m_prismatic2.m_localXAxis1;
			ugX = tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
			ugY = tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
			
			tMat = b2.m_xf.R;
			rX = this.m_localAnchor2.x - b2.m_sweep.localCenter.x;
			rY = this.m_localAnchor2.y - b2.m_sweep.localCenter.y;
			tX = tMat.col1.x * rX + tMat.col2.x * rY;
			rY = tMat.col1.y * rX + tMat.col2.y * rY;
			rX = tX;
			
			
			crug = rX * ugY - rY * ugX;
			
			this.m_J.linear2.Set(-this.m_ratio*ugX, -this.m_ratio*ugY);
			this.m_J.angular2 = -this.m_ratio * crug;
			K += this.m_ratio * this.m_ratio * (b2.m_invMass + b2.m_invI * crug * crug);
		}
		
		
		
		this.m_mass = 1.0 / K;
		
		if (step.warmStarting)
		{
			
			var P = step.dt * this.m_force;
			
			b1.m_linearVelocity.x += b1.m_invMass * P * this.m_J.linear1.x;
			b1.m_linearVelocity.y += b1.m_invMass * P * this.m_J.linear1.y;
			b1.m_angularVelocity += b1.m_invI * P * this.m_J.angular1;
			
			b2.m_linearVelocity.x += b2.m_invMass * P * this.m_J.linear2.x;
			b2.m_linearVelocity.y += b2.m_invMass * P * this.m_J.linear2.y;
			b2.m_angularVelocity += b2.m_invI * P * this.m_J.angular2;
		}
		else
		{
			this.m_force = 0.0;
		}
	}
b2GearJoint.prototype.SolveVelocityConstraints = function (step) {
		var b1 = this.m_body1;
		var b2 = this.m_body2;
		
		var Cdot = this.m_J.Compute(	b1.m_linearVelocity, b1.m_angularVelocity,
										b2.m_linearVelocity, b2.m_angularVelocity);
		
		var force = -step.inv_dt * this.m_mass * Cdot;
		this.m_force += force;
		
		var P = step.dt * force;
		b1.m_linearVelocity.x += b1.m_invMass * P * this.m_J.linear1.x;
		b1.m_linearVelocity.y += b1.m_invMass * P * this.m_J.linear1.y;
		b1.m_angularVelocity += b1.m_invI * P * this.m_J.angular1;
		b2.m_linearVelocity.x += b2.m_invMass * P * this.m_J.linear2.x;
		b2.m_linearVelocity.y += b2.m_invMass * P * this.m_J.linear2.y;
		b2.m_angularVelocity += b2.m_invI * P * this.m_J.angular2;
	}
b2GearJoint.prototype.SolvePositionConstraints = function () {
		var linearError = 0.0;
		
		var b1 = this.m_body1;
		var b2 = this.m_body2;
		
		var coordinate1;
		var coordinate2;
		if (this.m_revolute1)
		{
			coordinate1 = this.m_revolute1.GetJointAngle();
		}
		else
		{
			coordinate1 = this.m_prismatic1.GetJointTranslation();
		}
		
		if (this.m_revolute2)
		{
			coordinate2 = this.m_revolute2.GetJointAngle();
		}
		else
		{
			coordinate2 = this.m_prismatic2.GetJointTranslation();
		}
		
		var C = this.m_constant - (coordinate1 + this.m_ratio * coordinate2);
		
		var impulse = -this.m_mass * C;
		
		b1.m_sweep.c.x += b1.m_invMass * impulse * this.m_J.linear1.x;
		b1.m_sweep.c.y += b1.m_invMass * impulse * this.m_J.linear1.y;
		b1.m_sweep.a += b1.m_invI * impulse * this.m_J.angular1;
		b2.m_sweep.c.x += b2.m_invMass * impulse * this.m_J.linear2.x;
		b2.m_sweep.c.y += b2.m_invMass * impulse * this.m_J.linear2.y;
		b2.m_sweep.a += b2.m_invI * impulse * this.m_J.angular2;
		
		b1.SynchronizeTransform();
		b2.SynchronizeTransform();
		
		return linearError < b2Settings.b2_linearSlop;
	}
exports.b2GearJoint = b2GearJoint;
	
	
var b2GearJointDef = function() {
b2JointDef.prototype.__varz.call(this)
this.__varz();
this.__constructor.apply(this, arguments);
}
extend(b2GearJointDef.prototype, b2JointDef.prototype)
b2GearJointDef.prototype._super = function(){ b2JointDef.prototype.__constructor.apply(this, arguments) }
b2GearJointDef.prototype.__constructor = function () {
		this.type = b2Joint.e_gearJoint;
		this.joint1 = null;
		this.joint2 = null;
		this.ratio = 1.0;
	}
b2GearJointDef.prototype.__varz = function(){
}
b2GearJointDef.prototype.joint1 =  null;
b2GearJointDef.prototype.joint2 =  null;
b2GearJointDef.prototype.ratio =  null;
exports.b2GearJointDef = b2GearJointDef;


var b2DistanceJoint = function() {
b2Joint.prototype.__varz.call(this)
this.__varz();
this.__constructor.apply(this, arguments);
}
extend(b2DistanceJoint.prototype, b2Joint.prototype)
b2DistanceJoint.prototype._super = function(){ b2Joint.prototype.__constructor.apply(this, arguments) }
b2DistanceJoint.prototype.__constructor = function (def) {
		this._super(def);
		
		var tMat;
		var tX;
		var tY;
		
		this.m_localAnchor1.SetV(def.localAnchor1);
		
		this.m_localAnchor2.SetV(def.localAnchor2);
		
		this.m_length = def.length;
		this.m_frequencyHz = def.frequencyHz;
		this.m_dampingRatio = def.dampingRatio;
		this.m_impulse = 0.0;
		this.m_gamma = 0.0;
		this.m_bias = 0.0;
		this.m_inv_dt = 0.0;
	}
b2DistanceJoint.prototype.__varz = function(){
this.m_localAnchor1 =  new b2Vec2();
this.m_localAnchor2 =  new b2Vec2();
this.m_u =  new b2Vec2();
}
b2DistanceJoint.prototype.m_localAnchor1 =  new b2Vec2();
b2DistanceJoint.prototype.m_localAnchor2 =  new b2Vec2();
b2DistanceJoint.prototype.m_u =  new b2Vec2();
b2DistanceJoint.prototype.m_frequencyHz =  null;
b2DistanceJoint.prototype.m_dampingRatio =  null;
b2DistanceJoint.prototype.m_gamma =  null;
b2DistanceJoint.prototype.m_bias =  null;
b2DistanceJoint.prototype.m_impulse =  null;
b2DistanceJoint.prototype.m_mass =  null;
b2DistanceJoint.prototype.m_length =  null;
b2DistanceJoint.prototype.InitVelocityConstraints = function (step) {
		
		var tMat;
		var tX;
		
		this.m_inv_dt = step.inv_dt;

		var b1 = this.m_body1;
		var b2 = this.m_body2;
		
		
		
		tMat = b1.m_xf.R;
		var r1X = this.m_localAnchor1.x - b1.m_sweep.localCenter.x;
		var r1Y = this.m_localAnchor1.y - b1.m_sweep.localCenter.y;
		tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
		r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
		r1X = tX;
		
		tMat = b2.m_xf.R;
		var r2X = this.m_localAnchor2.x - b2.m_sweep.localCenter.x;
		var r2Y = this.m_localAnchor2.y - b2.m_sweep.localCenter.y;
		tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
		r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
		r2X = tX;
		
		
		this.m_u.x = b2.m_sweep.c.x + r2X - b1.m_sweep.c.x - r1X;
		this.m_u.y = b2.m_sweep.c.y + r2Y - b1.m_sweep.c.y - r1Y;
		
		
		
		var length = Math.sqrt(this.m_u.x*this.m_u.x + this.m_u.y*this.m_u.y);
		if (length > b2Settings.b2_linearSlop)
		{
			
			this.m_u.Multiply( 1.0 / length );
		}
		else
		{
			this.m_u.SetZero();
		}
		
		
		var cr1u = (r1X * this.m_u.y - r1Y * this.m_u.x);
		
		var cr2u = (r2X * this.m_u.y - r2Y * this.m_u.x);
		
		var invMass = b1.m_invMass + b1.m_invI * cr1u * cr1u + b2.m_invMass + b2.m_invI * cr2u * cr2u;
		
		this.m_mass = 1.0 / invMass;
		
		if (this.m_frequencyHz > 0.0)
		{
			var C = length - this.m_length;
	
			
			var omega = 2.0 * Math.PI * this.m_frequencyHz;
	
			
			var d = 2.0 * this.m_mass * this.m_dampingRatio * omega;
	
			
			var k = this.m_mass * omega * omega;
	
			
			this.m_gamma = 1.0 / (step.dt * (d + step.dt * k));
			this.m_bias = C * step.dt * k * this.m_gamma;
	
			this.m_mass = 1.0 / (invMass + this.m_gamma);
		}
		
		if (step.warmStarting)
		{
			this.m_impulse *= step.dtRatio;
			
			var PX = this.m_impulse * this.m_u.x;
			var PY = this.m_impulse * this.m_u.y;
			
			b1.m_linearVelocity.x -= b1.m_invMass * PX;
			b1.m_linearVelocity.y -= b1.m_invMass * PY;
			
			b1.m_angularVelocity -= b1.m_invI * (r1X * PY - r1Y * PX);
			
			b2.m_linearVelocity.x += b2.m_invMass * PX;
			b2.m_linearVelocity.y += b2.m_invMass * PY;
			
			b2.m_angularVelocity += b2.m_invI * (r2X * PY - r2Y * PX);
		}
		else
		{
			this.m_impulse = 0.0;
		}
	}
b2DistanceJoint.prototype.SolveVelocityConstraints = function (step) {
		
		var tMat;
		
		var b1 = this.m_body1;
		var b2 = this.m_body2;
		
		
		tMat = b1.m_xf.R;
		var r1X = this.m_localAnchor1.x - b1.m_sweep.localCenter.x;
		var r1Y = this.m_localAnchor1.y - b1.m_sweep.localCenter.y;
		var tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
		r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
		r1X = tX;
		
		tMat = b2.m_xf.R;
		var r2X = this.m_localAnchor2.x - b2.m_sweep.localCenter.x;
		var r2Y = this.m_localAnchor2.y - b2.m_sweep.localCenter.y;
		tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
		r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
		r2X = tX;
		
		
		
		var v1X = b1.m_linearVelocity.x + (-b1.m_angularVelocity * r1Y);
		var v1Y = b1.m_linearVelocity.y + (b1.m_angularVelocity * r1X);
		
		var v2X = b2.m_linearVelocity.x + (-b2.m_angularVelocity * r2Y);
		var v2Y = b2.m_linearVelocity.y + (b2.m_angularVelocity * r2X);
		
		var Cdot = (this.m_u.x * (v2X - v1X) + this.m_u.y * (v2Y - v1Y));
		
		var impulse = -this.m_mass * (Cdot + this.m_bias + this.m_gamma * this.m_impulse);
		this.m_impulse += impulse;
		
		
		var PX = impulse * this.m_u.x;
		var PY = impulse * this.m_u.y;
		
		b1.m_linearVelocity.x -= b1.m_invMass * PX;
		b1.m_linearVelocity.y -= b1.m_invMass * PY;
		
		b1.m_angularVelocity -= b1.m_invI * (r1X * PY - r1Y * PX);
		
		b2.m_linearVelocity.x += b2.m_invMass * PX;
		b2.m_linearVelocity.y += b2.m_invMass * PY;
		
		b2.m_angularVelocity += b2.m_invI * (r2X * PY - r2Y * PX);
	}
b2DistanceJoint.prototype.SolvePositionConstraints = function () {
		
		var tMat;
		
		if (this.m_frequencyHz > 0.0)
		{
			return true;
		}
		
		var b1 = this.m_body1;
		var b2 = this.m_body2;
		
		
		tMat = b1.m_xf.R;
		var r1X = this.m_localAnchor1.x - b1.m_sweep.localCenter.x;
		var r1Y = this.m_localAnchor1.y - b1.m_sweep.localCenter.y;
		var tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
		r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
		r1X = tX;
		
		tMat = b2.m_xf.R;
		var r2X = this.m_localAnchor2.x - b2.m_sweep.localCenter.x;
		var r2Y = this.m_localAnchor2.y - b2.m_sweep.localCenter.y;
		tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
		r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
		r2X = tX;
		
		
		var dX = b2.m_sweep.c.x + r2X - b1.m_sweep.c.x - r1X;
		var dY = b2.m_sweep.c.y + r2Y - b1.m_sweep.c.y - r1Y;
		
		
		var length = Math.sqrt(dX*dX + dY*dY);
		dX /= length;
		dY /= length;
		
		var C = length - this.m_length;
		C = b2Math.b2Clamp(C, -b2Settings.b2_maxLinearCorrection, b2Settings.b2_maxLinearCorrection);
		
		var impulse = -this.m_mass * C;
		
		this.m_u.Set(dX, dY);
		
		var PX = impulse * this.m_u.x;
		var PY = impulse * this.m_u.y;
		
		
		b1.m_sweep.c.x -= b1.m_invMass * PX;
		b1.m_sweep.c.y -= b1.m_invMass * PY;
		
		b1.m_sweep.a -= b1.m_invI * (r1X * PY - r1Y * PX);
		
		b2.m_sweep.c.x += b2.m_invMass * PX;
		b2.m_sweep.c.y += b2.m_invMass * PY;
		
		b2.m_sweep.a += b2.m_invI * (r2X * PY - r2Y * PX);
		
		b1.SynchronizeTransform();
		b2.SynchronizeTransform();
		
		return b2Math.b2Abs(C) < b2Settings.b2_linearSlop;
		
	}
b2DistanceJoint.prototype.GetAnchor1 = function () {
		return this.m_body1.GetWorldPoint(this.m_localAnchor1);
	}
b2DistanceJoint.prototype.GetAnchor2 = function () {
		return this.m_body2.GetWorldPoint(this.m_localAnchor2);
	}
b2DistanceJoint.prototype.GetReactionForce = function () {
		
		var F = new b2Vec2();
		F.SetV(this.m_u);
		F.Multiply(this.m_inv_dt * this.m_impulse);
		return F;
	}
b2DistanceJoint.prototype.GetReactionTorque = function () {
		
		return 0.0;
	}
exports.b2DistanceJoint = b2DistanceJoint;
	
	
var b2MouseJoint = function() {
b2Joint.prototype.__varz.call(this)
this.__varz();
this.__constructor.apply(this, arguments);
}
extend(b2MouseJoint.prototype, b2Joint.prototype)
b2MouseJoint.prototype._super = function(){ b2Joint.prototype.__constructor.apply(this, arguments) }
b2MouseJoint.prototype.__constructor = function (def) {
		this._super(def);
		
		this.m_target.SetV(def.target);
		
		var tX = this.m_target.x - this.m_body2.m_xf.position.x;
		var tY = this.m_target.y - this.m_body2.m_xf.position.y;
		var tMat = this.m_body2.m_xf.R;
		this.m_localAnchor.x = (tX * tMat.col1.x + tY * tMat.col1.y);
		this.m_localAnchor.y = (tX * tMat.col2.x + tY * tMat.col2.y);
		
		this.m_maxForce = def.maxForce;
		this.m_impulse.SetZero();
		
		var mass = this.m_body2.m_mass;
		
		
		var omega = 2.0 * b2Settings.b2_pi * def.frequencyHz;
		
		
		var d = 2.0 * mass * def.dampingRatio * omega;
		
		
		var k = (def.timeStep * mass) * (omega * omega);
		
		
		
		this.m_gamma = 1.0 / (d + k);
		this.m_beta = k / (d + k);
	}
b2MouseJoint.prototype.__varz = function(){
this.K =  new b2Mat22();
this.K1 =  new b2Mat22();
this.K2 =  new b2Mat22();
this.m_localAnchor =  new b2Vec2();
this.m_target =  new b2Vec2();
this.m_impulse =  new b2Vec2();
this.m_mass =  new b2Mat22();
this.m_C =  new b2Vec2();
}
b2MouseJoint.prototype.K =  new b2Mat22();
b2MouseJoint.prototype.K1 =  new b2Mat22();
b2MouseJoint.prototype.K2 =  new b2Mat22();
b2MouseJoint.prototype.m_localAnchor =  new b2Vec2();
b2MouseJoint.prototype.m_target =  new b2Vec2();
b2MouseJoint.prototype.m_impulse =  new b2Vec2();
b2MouseJoint.prototype.m_mass =  new b2Mat22();
b2MouseJoint.prototype.m_C =  new b2Vec2();
b2MouseJoint.prototype.m_maxForce =  null;
b2MouseJoint.prototype.m_beta =  null;
b2MouseJoint.prototype.m_gamma =  null;
b2MouseJoint.prototype.GetAnchor1 = function () {
		return this.m_target;
	}
b2MouseJoint.prototype.GetAnchor2 = function () {
		return this.m_body2.GetWorldPoint(this.m_localAnchor);
	}
b2MouseJoint.prototype.GetReactionForce = function () {
		return this.m_impulse;
	}
b2MouseJoint.prototype.GetReactionTorque = function () {
		return 0.0;
	}
b2MouseJoint.prototype.SetTarget = function (target) {
		if (this.m_body2.IsSleeping()){
			this.m_body2.WakeUp();
		}
		this.m_target = target;
	}
b2MouseJoint.prototype.InitVelocityConstraints = function (step) {
		var b = this.m_body2;
		
		var tMat;
		
		
		
		tMat = b.m_xf.R;
		var rX = this.m_localAnchor.x - b.m_sweep.localCenter.x;
		var rY = this.m_localAnchor.y - b.m_sweep.localCenter.y;
		var tX = (tMat.col1.x * rX + tMat.col2.x * rY);
		rY = (tMat.col1.y * rX + tMat.col2.y * rY);
		rX = tX;
		
		
		
		
		var invMass = b.m_invMass;
		var invI = b.m_invI;
		
		
		this.K1.col1.x = invMass;	this.K1.col2.x = 0.0;
		this.K1.col1.y = 0.0;		this.K1.col2.y = invMass;
		
		
		this.K2.col1.x = invI * rY * rY;	this.K2.col2.x = -invI * rX * rY;
		this.K2.col1.y = -invI * rX * rY;	this.K2.col2.y = invI * rX * rX;
		
		
		this.K.SetM(this.K1);
		this.K.AddM(this.K2);
		this.K.col1.x += this.m_gamma;
		this.K.col2.y += this.m_gamma;
		
		
		this.K.Invert(this.m_mass);
		
		
		this.m_C.x = b.m_sweep.c.x + rX - this.m_target.x;
		this.m_C.y = b.m_sweep.c.y + rY - this.m_target.y;
		
		
		b.m_angularVelocity *= 0.98;
		
		
		
		var PX = step.dt * this.m_impulse.x;
		var PY = step.dt * this.m_impulse.y;
		
		b.m_linearVelocity.x += invMass * PX;
		b.m_linearVelocity.y += invMass * PY;
		
		b.m_angularVelocity += invI * (rX * PY - rY * PX);
	}
b2MouseJoint.prototype.SolveVelocityConstraints = function (step) {
		var b = this.m_body2;
		
		var tMat;
		var tX;
		var tY;
		
		
		
		tMat = b.m_xf.R;
		var rX = this.m_localAnchor.x - b.m_sweep.localCenter.x;
		var rY = this.m_localAnchor.y - b.m_sweep.localCenter.y;
		tX = (tMat.col1.x * rX + tMat.col2.x * rY);
		rY = (tMat.col1.y * rX + tMat.col2.y * rY);
		rX = tX;
		
		
		
		var CdotX = b.m_linearVelocity.x + (-b.m_angularVelocity * rY);
		var CdotY = b.m_linearVelocity.y + (b.m_angularVelocity * rX);
		
		tMat = this.m_mass;
		tX = CdotX + (this.m_beta * step.inv_dt) * this.m_C.x + this.m_gamma * step.dt * this.m_impulse.x;
		tY = CdotY + (this.m_beta * step.inv_dt) * this.m_C.y + this.m_gamma * step.dt * this.m_impulse.y;
		var forceX = -step.inv_dt * (tMat.col1.x * tX + tMat.col2.x * tY);
		var forceY = -step.inv_dt * (tMat.col1.y * tX + tMat.col2.y * tY);
		
		var oldForceX = this.m_impulse.x;
		var oldForceY = this.m_impulse.y;
		
		this.m_impulse.x += forceX;
		this.m_impulse.y += forceY;
		var forceMagnitude = this.m_impulse.Length();
		if (forceMagnitude > this.m_maxForce)
		{
			
			this.m_impulse.Multiply(this.m_maxForce / forceMagnitude);
		}
		
		forceX = this.m_impulse.x - oldForceX;
		forceY = this.m_impulse.y - oldForceY;
		
		
		var PX = step.dt * forceX;
		var PY = step.dt * forceY;
		
		b.m_linearVelocity.x += b.m_invMass * PX;
		b.m_linearVelocity.y += b.m_invMass * PY;
		
		b.m_angularVelocity += b.m_invI * (rX * PY - rY * PX);
	}
b2MouseJoint.prototype.SolvePositionConstraints = function () { 
		return true; 
	}
exports.b2MouseJoint = b2MouseJoint;


var b2PulleyJoint = function() {
b2Joint.prototype.__varz.call(this)
this.__varz();
this.__constructor.apply(this, arguments);
}
extend(b2PulleyJoint.prototype, b2Joint.prototype)
b2PulleyJoint.prototype._super = function(){ b2Joint.prototype.__constructor.apply(this, arguments) }
b2PulleyJoint.prototype.__constructor = function (def) {
		
		
		this._super(def);
		
		var tMat;
		var tX;
		var tY;
		
		this.m_ground = this.m_body1.m_world.m_groundBody;
		
		this.m_groundAnchor1.x = def.groundAnchor1.x - this.m_ground.m_xf.position.x;
		this.m_groundAnchor1.y = def.groundAnchor1.y - this.m_ground.m_xf.position.y;
		
		this.m_groundAnchor2.x = def.groundAnchor2.x - this.m_ground.m_xf.position.x;
		this.m_groundAnchor2.y = def.groundAnchor2.y - this.m_ground.m_xf.position.y;
		
		this.m_localAnchor1.SetV(def.localAnchor1);
		
		this.m_localAnchor2.SetV(def.localAnchor2);
		
		
		this.m_ratio = def.ratio;
		
		this.m_constant = def.length1 + this.m_ratio * def.length2;
		
		this.m_maxLength1 = b2Math.b2Min(def.maxLength1, this.m_constant - this.m_ratio * b2PulleyJoint.b2_minPulleyLength);
		this.m_maxLength2 = b2Math.b2Min(def.maxLength2, (this.m_constant - b2PulleyJoint.b2_minPulleyLength) / this.m_ratio);
		
		this.m_force = 0.0;
		this.m_limitForce1 = 0.0;
		this.m_limitForce2 = 0.0;
		
	}
b2PulleyJoint.prototype.__varz = function(){
this.m_groundAnchor1 =  new b2Vec2();
this.m_groundAnchor2 =  new b2Vec2();
this.m_localAnchor1 =  new b2Vec2();
this.m_localAnchor2 =  new b2Vec2();
this.m_u1 =  new b2Vec2();
this.m_u2 =  new b2Vec2();
}
b2PulleyJoint.b2_minPulleyLength =  2.0;
b2PulleyJoint.prototype.m_ground =  null;
b2PulleyJoint.prototype.m_groundAnchor1 =  new b2Vec2();
b2PulleyJoint.prototype.m_groundAnchor2 =  new b2Vec2();
b2PulleyJoint.prototype.m_localAnchor1 =  new b2Vec2();
b2PulleyJoint.prototype.m_localAnchor2 =  new b2Vec2();
b2PulleyJoint.prototype.m_u1 =  new b2Vec2();
b2PulleyJoint.prototype.m_u2 =  new b2Vec2();
b2PulleyJoint.prototype.m_constant =  null;
b2PulleyJoint.prototype.m_ratio =  null;
b2PulleyJoint.prototype.m_maxLength1 =  null;
b2PulleyJoint.prototype.m_maxLength2 =  null;
b2PulleyJoint.prototype.m_pulleyMass =  null;
b2PulleyJoint.prototype.m_limitMass1 =  null;
b2PulleyJoint.prototype.m_limitMass2 =  null;
b2PulleyJoint.prototype.m_force =  null;
b2PulleyJoint.prototype.m_limitForce1 =  null;
b2PulleyJoint.prototype.m_limitForce2 =  null;
b2PulleyJoint.prototype.m_positionImpulse =  null;
b2PulleyJoint.prototype.m_limitPositionImpulse1 =  null;
b2PulleyJoint.prototype.m_limitPositionImpulse2 =  null;
b2PulleyJoint.prototype.m_state =  0;
b2PulleyJoint.prototype.m_limitState1 =  0;
b2PulleyJoint.prototype.m_limitState2 =  0;
b2PulleyJoint.prototype.GetAnchor1 = function () {
		return this.m_body1.GetWorldPoint(this.m_localAnchor1);
	}
b2PulleyJoint.prototype.GetAnchor2 = function () {
		return this.m_body2.GetWorldPoint(this.m_localAnchor2);
	}
b2PulleyJoint.prototype.GetReactionForce = function () {
		
		var F = this.m_u2.Copy();
		F.Multiply(this.m_force);
		return F;
	}
b2PulleyJoint.prototype.GetReactionTorque = function () {
		return 0.0;
	}
b2PulleyJoint.prototype.GetGroundAnchor1 = function () {
		
		var a = this.m_ground.m_xf.position.Copy();
		a.Add(this.m_groundAnchor1);
		return a;
	}
b2PulleyJoint.prototype.GetGroundAnchor2 = function () {
		
		var a = this.m_ground.m_xf.position.Copy();
		a.Add(this.m_groundAnchor2);
		return a;
	}
b2PulleyJoint.prototype.GetLength1 = function () {
		var p = this.m_body1.GetWorldPoint(this.m_localAnchor1);
		
		var sX = this.m_ground.m_xf.position.x + this.m_groundAnchor1.x;
		var sY = this.m_ground.m_xf.position.y + this.m_groundAnchor1.y;
		
		var dX = p.x - sX;
		var dY = p.y - sY;
		
		return Math.sqrt(dX*dX + dY*dY);
	}
b2PulleyJoint.prototype.GetLength2 = function () {
		var p = this.m_body2.GetWorldPoint(this.m_localAnchor2);
		
		var sX = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x;
		var sY = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y;
		
		var dX = p.x - sX;
		var dY = p.y - sY;
		
		return Math.sqrt(dX*dX + dY*dY);
	}
b2PulleyJoint.prototype.GetRatio = function () {
		return this.m_ratio;
	}
b2PulleyJoint.prototype.InitVelocityConstraints = function (step) {
		var b1 = this.m_body1;
		var b2 = this.m_body2;
		
		var tMat;
		
		
		tMat = b1.m_xf.R;
		var r1X = this.m_localAnchor1.x - b1.m_sweep.localCenter.x;
		var r1Y = this.m_localAnchor1.y - b1.m_sweep.localCenter.y;
		var tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
		r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
		r1X = tX;
		
		tMat = b2.m_xf.R;
		var r2X = this.m_localAnchor2.x - b2.m_sweep.localCenter.x;
		var r2Y = this.m_localAnchor2.y - b2.m_sweep.localCenter.y;
		tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
		r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
		r2X = tX;
		
		
		var p1X = b1.m_sweep.c.x + r1X;
		var p1Y = b1.m_sweep.c.y + r1Y;
		
		var p2X = b2.m_sweep.c.x + r2X;
		var p2Y = b2.m_sweep.c.y + r2Y;
		
		
		var s1X = this.m_ground.m_xf.position.x + this.m_groundAnchor1.x;
		var s1Y = this.m_ground.m_xf.position.y + this.m_groundAnchor1.y;
		
		var s2X = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x;
		var s2Y = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y;
		
		
		
		this.m_u1.Set(p1X - s1X, p1Y - s1Y);
		
		this.m_u2.Set(p2X - s2X, p2Y - s2Y);
		
		var length1 = this.m_u1.Length();
		var length2 = this.m_u2.Length();
		
		if (length1 > b2Settings.b2_linearSlop)
		{
			
			this.m_u1.Multiply(1.0 / length1);
		}
		else
		{
			this.m_u1.SetZero();
		}
		
		if (length2 > b2Settings.b2_linearSlop)
		{
			
			this.m_u2.Multiply(1.0 / length2);
		}
		else
		{
			this.m_u2.SetZero();
		}
		
		var C = this.m_constant - length1 - this.m_ratio * length2;
		if (C > 0.0)
		{
			this.m_state = b2Joint.e_inactiveLimit;
			this.m_force = 0.0;
		}
		else
		{
			this.m_state = b2Joint.e_atUpperLimit;
			this.m_positionImpulse = 0.0;
		}
		
		if (length1 < this.m_maxLength1)
		{
			this.m_limitState1 = b2Joint.e_inactiveLimit;
			this.m_limitForce1 = 0.0;
		}
		else
		{
			this.m_limitState1 = b2Joint.e_atUpperLimit;
			this.m_limitPositionImpulse1 = 0.0;
		}
		
		if (length2 < this.m_maxLength2)
		{
			this.m_limitState2 = b2Joint.e_inactiveLimit;
			this.m_limitForce2 = 0.0;
		}
		else
		{
			this.m_limitState2 = b2Joint.e_atUpperLimit;
			this.m_limitPositionImpulse2 = 0.0;
		}
		
		
		
		var cr1u1 = r1X * this.m_u1.y - r1Y * this.m_u1.x;
		
		var cr2u2 = r2X * this.m_u2.y - r2Y * this.m_u2.x;
		
		this.m_limitMass1 = b1.m_invMass + b1.m_invI * cr1u1 * cr1u1;
		this.m_limitMass2 = b2.m_invMass + b2.m_invI * cr2u2 * cr2u2;
		this.m_pulleyMass = this.m_limitMass1 + this.m_ratio * this.m_ratio * this.m_limitMass2;
		
		
		
		this.m_limitMass1 = 1.0 / this.m_limitMass1;
		this.m_limitMass2 = 1.0 / this.m_limitMass2;
		this.m_pulleyMass = 1.0 / this.m_pulleyMass;
		
		if (step.warmStarting)
		{
			
			
			
			var P1X = step.dt * (-this.m_force - this.m_limitForce1) * this.m_u1.x;
			var P1Y = step.dt * (-this.m_force - this.m_limitForce1) * this.m_u1.y;
			
			
			var P2X = step.dt * (-this.m_ratio * this.m_force - this.m_limitForce2) * this.m_u2.x;
			var P2Y = step.dt * (-this.m_ratio * this.m_force - this.m_limitForce2) * this.m_u2.y;
			
			b1.m_linearVelocity.x += b1.m_invMass * P1X;
			b1.m_linearVelocity.y += b1.m_invMass * P1Y;
			
			b1.m_angularVelocity += b1.m_invI * (r1X * P1Y - r1Y * P1X);
			
			b2.m_linearVelocity.x += b2.m_invMass * P2X;
			b2.m_linearVelocity.y += b2.m_invMass * P2Y;
			
			b2.m_angularVelocity += b2.m_invI * (r2X * P2Y - r2Y * P2X);
		}
		else
		{
			this.m_force = 0.0;
			this.m_limitForce1 = 0.0;
			this.m_limitForce2 = 0.0;
		}
	}
b2PulleyJoint.prototype.SolveVelocityConstraints = function (step) {
		var b1 = this.m_body1;
		var b2 = this.m_body2;
		
		var tMat;
		
		
		tMat = b1.m_xf.R;
		var r1X = this.m_localAnchor1.x - b1.m_sweep.localCenter.x;
		var r1Y = this.m_localAnchor1.y - b1.m_sweep.localCenter.y;
		var tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
		r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
		r1X = tX;
		
		tMat = b2.m_xf.R;
		var r2X = this.m_localAnchor2.x - b2.m_sweep.localCenter.x;
		var r2Y = this.m_localAnchor2.y - b2.m_sweep.localCenter.y;
		tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
		r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
		r2X = tX;
		
		
		var v1X;
		var v1Y;
		var v2X;
		var v2Y;
		var P1X;
		var P1Y;
		var P2X;
		var P2Y;
		var Cdot;
		var force;
		var oldForce;
		
		if (this.m_state == b2Joint.e_atUpperLimit)
		{
			
			v1X = b1.m_linearVelocity.x + (-b1.m_angularVelocity * r1Y);
			v1Y = b1.m_linearVelocity.y + (b1.m_angularVelocity * r1X);
			
			v2X = b2.m_linearVelocity.x + (-b2.m_angularVelocity * r2Y);
			v2Y = b2.m_linearVelocity.y + (b2.m_angularVelocity * r2X);
			
			
			Cdot = -(this.m_u1.x * v1X + this.m_u1.y * v1Y) - this.m_ratio * (this.m_u2.x * v2X + this.m_u2.y * v2Y);
			force = -step.inv_dt * this.m_pulleyMass * Cdot;
			oldForce = this.m_force;
			this.m_force = b2Math.b2Max(0.0, this.m_force + force);
			force = this.m_force - oldForce;
			
			
			P1X = -step.dt * force * this.m_u1.x;
			P1Y = -step.dt * force * this.m_u1.y;
			
			P2X = -step.dt * this.m_ratio * force * this.m_u2.x;
			P2Y = -step.dt * this.m_ratio * force * this.m_u2.y;
			
			b1.m_linearVelocity.x += b1.m_invMass * P1X;
			b1.m_linearVelocity.y += b1.m_invMass * P1Y;
			
			b1.m_angularVelocity += b1.m_invI * (r1X * P1Y - r1Y * P1X);
			
			b2.m_linearVelocity.x += b2.m_invMass * P2X;
			b2.m_linearVelocity.y += b2.m_invMass * P2Y;
			
			b2.m_angularVelocity += b2.m_invI * (r2X * P2Y - r2Y * P2X);
		}
		
		if (this.m_limitState1 == b2Joint.e_atUpperLimit)
		{
			
			v1X = b1.m_linearVelocity.x + (-b1.m_angularVelocity * r1Y);
			v1Y = b1.m_linearVelocity.y + (b1.m_angularVelocity * r1X);
			
			
			Cdot = -(this.m_u1.x * v1X + this.m_u1.y * v1Y);
			force = -step.inv_dt * this.m_limitMass1 * Cdot;
			oldForce = this.m_limitForce1;
			this.m_limitForce1 = b2Math.b2Max(0.0, this.m_limitForce1 + force);
			force = this.m_limitForce1 - oldForce;
			
			
			P1X = -step.dt * force * this.m_u1.x;
			P1Y = -step.dt * force * this.m_u1.y;
			
			b1.m_linearVelocity.x += b1.m_invMass * P1X;
			b1.m_linearVelocity.y += b1.m_invMass * P1Y;
			
			b1.m_angularVelocity += b1.m_invI * (r1X * P1Y - r1Y * P1X);
		}
		
		if (this.m_limitState2 == b2Joint.e_atUpperLimit)
		{
			
			v2X = b2.m_linearVelocity.x + (-b2.m_angularVelocity * r2Y);
			v2Y = b2.m_linearVelocity.y + (b2.m_angularVelocity * r2X);
			
			
			Cdot = -(this.m_u2.x * v2X + this.m_u2.y * v2Y);
			force = -step.inv_dt * this.m_limitMass2 * Cdot;
			oldForce = this.m_limitForce2;
			this.m_limitForce2 = b2Math.b2Max(0.0, this.m_limitForce2 + force);
			force = this.m_limitForce2 - oldForce;
			
			
			P2X = -step.dt * force * this.m_u2.x;
			P2Y = -step.dt * force * this.m_u2.y;
			
			b2.m_linearVelocity.x += b2.m_invMass * P2X;
			b2.m_linearVelocity.y += b2.m_invMass * P2Y;
			
			b2.m_angularVelocity += b2.m_invI * (r2X * P2Y - r2Y * P2X);
		}
	}
b2PulleyJoint.prototype.SolvePositionConstraints = function () {
		var b1 = this.m_body1;
		var b2 = this.m_body2;
		
		var tMat;
		
		
		var s1X = this.m_ground.m_xf.position.x + this.m_groundAnchor1.x;
		var s1Y = this.m_ground.m_xf.position.y + this.m_groundAnchor1.y;
		
		var s2X = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x;
		var s2Y = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y;
		
		
		var r1X;
		var r1Y;
		var r2X;
		var r2Y;
		var p1X;
		var p1Y;
		var p2X;
		var p2Y;
		var length1;
		var length2;
		var C;
		var impulse;
		var oldImpulse;
		var oldLimitPositionImpulse;
		
		var tX;
		
		var linearError = 0.0;
		
		if (this.m_state == b2Joint.e_atUpperLimit)
		{
			
			tMat = b1.m_xf.R;
			r1X = this.m_localAnchor1.x - b1.m_sweep.localCenter.x;
			r1Y = this.m_localAnchor1.y - b1.m_sweep.localCenter.y;
			tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
			r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
			r1X = tX;
			
			tMat = b2.m_xf.R;
			r2X = this.m_localAnchor2.x - b2.m_sweep.localCenter.x;
			r2Y = this.m_localAnchor2.y - b2.m_sweep.localCenter.y;
			tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
			r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
			r2X = tX;
			
			
			p1X = b1.m_sweep.c.x + r1X;
			p1Y = b1.m_sweep.c.y + r1Y;
			
			p2X = b2.m_sweep.c.x + r2X;
			p2Y = b2.m_sweep.c.y + r2Y;
			
			
			
			this.m_u1.Set(p1X - s1X, p1Y - s1Y);
			
			this.m_u2.Set(p2X - s2X, p2Y - s2Y);
			
			length1 = this.m_u1.Length();
			length2 = this.m_u2.Length();
			
			if (length1 > b2Settings.b2_linearSlop)
			{
				
				this.m_u1.Multiply( 1.0 / length1 );
			}
			else
			{
				this.m_u1.SetZero();
			}
			
			if (length2 > b2Settings.b2_linearSlop)
			{
				
				this.m_u2.Multiply( 1.0 / length2 );
			}
			else
			{
				this.m_u2.SetZero();
			}
			
			C = this.m_constant - length1 - this.m_ratio * length2;
			linearError = b2Math.b2Max(linearError, -C);
			C = b2Math.b2Clamp(C + b2Settings.b2_linearSlop, -b2Settings.b2_maxLinearCorrection, 0.0);
			impulse = -this.m_pulleyMass * C;
			
			oldImpulse = this.m_positionImpulse;
			this.m_positionImpulse = b2Math.b2Max(0.0, this.m_positionImpulse + impulse);
			impulse = this.m_positionImpulse - oldImpulse;
			
			p1X = -impulse * this.m_u1.x;
			p1Y = -impulse * this.m_u1.y;
			p2X = -this.m_ratio * impulse * this.m_u2.x;
			p2Y = -this.m_ratio * impulse * this.m_u2.y;
			
			b1.m_sweep.c.x += b1.m_invMass * p1X;
			b1.m_sweep.c.y += b1.m_invMass * p1Y;
			b1.m_sweep.a += b1.m_invI * (r1X * p1Y - r1Y * p1X);
			b2.m_sweep.c.x += b2.m_invMass * p2X;
			b2.m_sweep.c.y += b2.m_invMass * p2Y;
			b2.m_sweep.a += b2.m_invI * (r2X * p2Y - r2Y * p2X);
			
			b1.SynchronizeTransform();
			b2.SynchronizeTransform();
		}
		
		if (this.m_limitState1 == b2Joint.e_atUpperLimit)
		{
			
			tMat = b1.m_xf.R;
			r1X = this.m_localAnchor1.x - b1.m_sweep.localCenter.x;
			r1Y = this.m_localAnchor1.y - b1.m_sweep.localCenter.y;
			tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
			r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
			r1X = tX;
			
			p1X = b1.m_sweep.c.x + r1X;
			p1Y = b1.m_sweep.c.y + r1Y;
			
			
			this.m_u1.Set(p1X - s1X, p1Y - s1Y);
			
			length1 = this.m_u1.Length();
			
			if (length1 > b2Settings.b2_linearSlop)
			{
				
				this.m_u1.x *= 1.0 / length1;
				this.m_u1.y *= 1.0 / length1;
			}
			else
			{
				this.m_u1.SetZero();
			}
			
			C = this.m_maxLength1 - length1;
			linearError = b2Math.b2Max(linearError, -C);
			C = b2Math.b2Clamp(C + b2Settings.b2_linearSlop, -b2Settings.b2_maxLinearCorrection, 0.0);
			impulse = -this.m_limitMass1 * C;
			oldLimitPositionImpulse = this.m_limitPositionImpulse1;
			this.m_limitPositionImpulse1 = b2Math.b2Max(0.0, this.m_limitPositionImpulse1 + impulse);
			impulse = this.m_limitPositionImpulse1 - oldLimitPositionImpulse;
			
			
			p1X = -impulse * this.m_u1.x;
			p1Y = -impulse * this.m_u1.y;
			
			b1.m_sweep.c.x += b1.m_invMass * p1X;
			b1.m_sweep.c.y += b1.m_invMass * p1Y;
			
			b1.m_sweep.a += b1.m_invI * (r1X * p1Y - r1Y * p1X);
			
			b1.SynchronizeTransform();
		}
		
		if (this.m_limitState2 == b2Joint.e_atUpperLimit)
		{
			
			tMat = b2.m_xf.R;
			r2X = this.m_localAnchor2.x - b2.m_sweep.localCenter.x;
			r2Y = this.m_localAnchor2.y - b2.m_sweep.localCenter.y;
			tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
			r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
			r2X = tX;
			
			p2X = b2.m_sweep.c.x + r2X;
			p2Y = b2.m_sweep.c.y + r2Y;
			
			
			this.m_u2.Set(p2X - s2X, p2Y - s2Y);
			
			length2 = this.m_u2.Length();
			
			if (length2 > b2Settings.b2_linearSlop)
			{
				
				this.m_u2.x *= 1.0 / length2;
				this.m_u2.y *= 1.0 / length2;
			}
			else
			{
				this.m_u2.SetZero();
			}
			
			C = this.m_maxLength2 - length2;
			linearError = b2Math.b2Max(linearError, -C);
			C = b2Math.b2Clamp(C + b2Settings.b2_linearSlop, -b2Settings.b2_maxLinearCorrection, 0.0);
			impulse = -this.m_limitMass2 * C;
			oldLimitPositionImpulse = this.m_limitPositionImpulse2;
			this.m_limitPositionImpulse2 = b2Math.b2Max(0.0, this.m_limitPositionImpulse2 + impulse);
			impulse = this.m_limitPositionImpulse2 - oldLimitPositionImpulse;
			
			
			p2X = -impulse * this.m_u2.x;
			p2Y = -impulse * this.m_u2.y;
			
			
			b2.m_sweep.c.x += b2.m_invMass * p2X;
			b2.m_sweep.c.y += b2.m_invMass * p2Y;
			
			b2.m_sweep.a += b2.m_invI * (r2X * p2Y - r2Y * p2X);
			
			b2.SynchronizeTransform();
		}
		
		return linearError < b2Settings.b2_linearSlop;
	}
exports.b2PulleyJoint = b2PulleyJoint;


var b2RevoluteJoint = function() {
b2Joint.prototype.__varz.call(this)
this.__varz();
this.__constructor.apply(this, arguments);
}
extend(b2RevoluteJoint.prototype, b2Joint.prototype)
b2RevoluteJoint.prototype._super = function(){ b2Joint.prototype.__constructor.apply(this, arguments) }
b2RevoluteJoint.prototype.__constructor = function (def) {
		this._super(def);
		
		
		this.m_localAnchor1.SetV(def.localAnchor1);
		
		this.m_localAnchor2.SetV(def.localAnchor2);
		
		this.m_referenceAngle = def.referenceAngle;
		
		this.m_pivotForce.Set(0.0, 0.0);
		this.m_motorForce = 0.0;
		this.m_limitForce = 0.0;
		this.m_limitPositionImpulse = 0.0;
		
		this.m_lowerAngle = def.lowerAngle;
		this.m_upperAngle = def.upperAngle;
		this.m_maxMotorTorque = def.maxMotorTorque;
		this.m_motorSpeed = def.motorSpeed;
		this.m_enableLimit = def.enableLimit;
		this.m_enableMotor = def.enableMotor;
	}
b2RevoluteJoint.prototype.__varz = function(){
this.K =  new b2Mat22();
this.K1 =  new b2Mat22();
this.K2 =  new b2Mat22();
this.K3 =  new b2Mat22();
this.m_localAnchor1 =  new b2Vec2();
this.m_localAnchor2 =  new b2Vec2();
this.m_pivotForce =  new b2Vec2();
this.m_pivotMass =  new b2Mat22();
}
b2RevoluteJoint.tImpulse =  new b2Vec2();
b2RevoluteJoint.prototype.K =  new b2Mat22();
b2RevoluteJoint.prototype.K1 =  new b2Mat22();
b2RevoluteJoint.prototype.K2 =  new b2Mat22();
b2RevoluteJoint.prototype.K3 =  new b2Mat22();
b2RevoluteJoint.prototype.m_localAnchor1 =  new b2Vec2();
b2RevoluteJoint.prototype.m_localAnchor2 =  new b2Vec2();
b2RevoluteJoint.prototype.m_pivotForce =  new b2Vec2();
b2RevoluteJoint.prototype.m_motorForce =  null;
b2RevoluteJoint.prototype.m_limitForce =  null;
b2RevoluteJoint.prototype.m_limitPositionImpulse =  null;
b2RevoluteJoint.prototype.m_pivotMass =  new b2Mat22();
b2RevoluteJoint.prototype.m_motorMass =  null;
b2RevoluteJoint.prototype.m_enableMotor =  null;
b2RevoluteJoint.prototype.m_maxMotorTorque =  null;
b2RevoluteJoint.prototype.m_motorSpeed =  null;
b2RevoluteJoint.prototype.m_enableLimit =  null;
b2RevoluteJoint.prototype.m_referenceAngle =  null;
b2RevoluteJoint.prototype.m_lowerAngle =  null;
b2RevoluteJoint.prototype.m_upperAngle =  null;
b2RevoluteJoint.prototype.m_limitState =  0;
b2RevoluteJoint.prototype.GetAnchor1 = function () {
		return this.m_body1.GetWorldPoint(this.m_localAnchor1);
	}
b2RevoluteJoint.prototype.GetAnchor2 = function () {
		return this.m_body2.GetWorldPoint(this.m_localAnchor2);
	}
b2RevoluteJoint.prototype.GetReactionForce = function () {
		return this.m_pivotForce;
	}
b2RevoluteJoint.prototype.GetReactionTorque = function () {
		return this.m_limitForce;
	}
b2RevoluteJoint.prototype.GetJointAngle = function () {
		
		
		return this.m_body2.m_sweep.a - this.m_body1.m_sweep.a - this.m_referenceAngle;
	}
b2RevoluteJoint.prototype.GetJointSpeed = function () {
		
		
		return this.m_body2.m_angularVelocity - this.m_body1.m_angularVelocity;
	}
b2RevoluteJoint.prototype.IsLimitEnabled = function () {
		return this.m_enableLimit;
	}
b2RevoluteJoint.prototype.EnableLimit = function (flag) {
		this.m_enableLimit = flag;
	}
b2RevoluteJoint.prototype.GetLowerLimit = function () {
		return this.m_lowerAngle;
	}
b2RevoluteJoint.prototype.GetUpperLimit = function () {
		return this.m_upperAngle;
	}
b2RevoluteJoint.prototype.SetLimits = function (lower, upper) {
		
		this.m_lowerAngle = lower;
		this.m_upperAngle = upper;
	}
b2RevoluteJoint.prototype.IsMotorEnabled = function () {
		return this.m_enableMotor;
	}
b2RevoluteJoint.prototype.EnableMotor = function (flag) {
		this.m_enableMotor = flag;
	}
b2RevoluteJoint.prototype.SetMotorSpeed = function (speed) {
		this.m_motorSpeed = speed;
	}
b2RevoluteJoint.prototype.GetMotorSpeed = function () {
		return this.m_motorSpeed;
	}
b2RevoluteJoint.prototype.SetMaxMotorTorque = function (torque) {
		this.m_maxMotorTorque = torque;
	}
b2RevoluteJoint.prototype.GetMotorTorque = function () {
		return this.m_motorForce;
	}
b2RevoluteJoint.prototype.InitVelocityConstraints = function (step) {
		var b1 = this.m_body1;
		var b2 = this.m_body2;
		
		var tMat;
		var tX;
		
		
		
		tMat = b1.m_xf.R;
		var r1X = this.m_localAnchor1.x - b1.m_sweep.localCenter.x;
		var r1Y = this.m_localAnchor1.y - b1.m_sweep.localCenter.y;
		tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
		r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
		r1X = tX;
		
		tMat = b2.m_xf.R;
		var r2X = this.m_localAnchor2.x - b2.m_sweep.localCenter.x;
		var r2Y = this.m_localAnchor2.y - b2.m_sweep.localCenter.y;
		tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
		r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
		r2X = tX;
		
		
		
		
		var invMass1 = b1.m_invMass;
		var invMass2 = b2.m_invMass;
		var invI1 = b1.m_invI;
		var invI2 = b2.m_invI;
		
		
		this.K1.col1.x = invMass1 + invMass2;	this.K1.col2.x = 0.0;
		this.K1.col1.y = 0.0;					this.K1.col2.y = invMass1 + invMass2;
		
		
		this.K2.col1.x = invI1 * r1Y * r1Y;	this.K2.col2.x = -invI1 * r1X * r1Y;
		this.K2.col1.y = -invI1 * r1X * r1Y;	this.K2.col2.y = invI1 * r1X * r1X;
		
		
		this.K3.col1.x = invI2 * r2Y * r2Y;	this.K3.col2.x = -invI2 * r2X * r2Y;
		this.K3.col1.y = -invI2 * r2X * r2Y;	this.K3.col2.y = invI2 * r2X * r2X;
		
		
		this.K.SetM(this.K1);
		this.K.AddM(this.K2);
		this.K.AddM(this.K3);
		
		
		this.K.Invert(this.m_pivotMass);
		
		this.m_motorMass = 1.0 / (invI1 + invI2);
		
		if (this.m_enableMotor == false)
		{
			this.m_motorForce = 0.0;
		}
		
		if (this.m_enableLimit)
		{
			
			var jointAngle = b2.m_sweep.a - b1.m_sweep.a - this.m_referenceAngle;
			if (b2Math.b2Abs(this.m_upperAngle - this.m_lowerAngle) < 2.0 * b2Settings.b2_angularSlop)
			{
				this.m_limitState = b2Joint.e_equalLimits;
			}
			else if (jointAngle <= this.m_lowerAngle)
			{
				if (this.m_limitState != b2Joint.e_atLowerLimit)
				{
					this.m_limitForce = 0.0;
				}
				this.m_limitState = b2Joint.e_atLowerLimit;
			}
			else if (jointAngle >= this.m_upperAngle)
			{
				if (this.m_limitState != b2Joint.e_atUpperLimit)
				{
					this.m_limitForce = 0.0;
				}
				this.m_limitState = b2Joint.e_atUpperLimit;
			}
			else
			{
				this.m_limitState = b2Joint.e_inactiveLimit;
				this.m_limitForce = 0.0;
			}
		}
		else
		{
			this.m_limitForce = 0.0;
		}
		
		
		if (step.warmStarting)
		{
			
			b1.m_linearVelocity.x -= step.dt * invMass1 * this.m_pivotForce.x;
			b1.m_linearVelocity.y -= step.dt * invMass1 * this.m_pivotForce.y;
			
			b1.m_angularVelocity -= step.dt * invI1 * ((r1X * this.m_pivotForce.y - r1Y * this.m_pivotForce.x) + this.m_motorForce + this.m_limitForce);
			
			
			b2.m_linearVelocity.x += step.dt * invMass2 * this.m_pivotForce.x;
			b2.m_linearVelocity.y += step.dt * invMass2 * this.m_pivotForce.y;
			
			b2.m_angularVelocity += step.dt * invI2 * ((r2X * this.m_pivotForce.y - r2Y * this.m_pivotForce.x) + this.m_motorForce + this.m_limitForce);
		}
		else{
			this.m_pivotForce.SetZero();
			this.m_motorForce = 0.0;
			this.m_limitForce = 0.0;
		}
		
		this.m_limitPositionImpulse = 0.0;
	}
b2RevoluteJoint.prototype.SolveVelocityConstraints = function (step) {
		var b1 = this.m_body1;
		var b2 = this.m_body2;
		
		var tMat;
		var tX;
		
		
		tMat = b1.m_xf.R;
		var r1X = this.m_localAnchor1.x - b1.m_sweep.localCenter.x;
		var r1Y = this.m_localAnchor1.y - b1.m_sweep.localCenter.y;
		tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
		r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
		r1X = tX;
		
		tMat = b2.m_xf.R;
		var r2X = this.m_localAnchor2.x - b2.m_sweep.localCenter.x;
		var r2Y = this.m_localAnchor2.y - b2.m_sweep.localCenter.y;
		tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
		r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
		r2X = tX;
		
		var oldLimitForce;
		
		
		
		var pivotCdotX = b2.m_linearVelocity.x + (-b2.m_angularVelocity * r2Y) - b1.m_linearVelocity.x - (-b1.m_angularVelocity * r1Y);
		var pivotCdotY = b2.m_linearVelocity.y + (b2.m_angularVelocity * r2X) - b1.m_linearVelocity.y - (b1.m_angularVelocity * r1X);
		
		
		var pivotForceX = -step.inv_dt * (this.m_pivotMass.col1.x * pivotCdotX + this.m_pivotMass.col2.x * pivotCdotY);
		var pivotForceY = -step.inv_dt * (this.m_pivotMass.col1.y * pivotCdotX + this.m_pivotMass.col2.y * pivotCdotY);
		this.m_pivotForce.x += pivotForceX;
		this.m_pivotForce.y += pivotForceY;
		
		
		var PX = step.dt * pivotForceX;
		var PY = step.dt * pivotForceY;
		
		
		b1.m_linearVelocity.x -= b1.m_invMass * PX;
		b1.m_linearVelocity.y -= b1.m_invMass * PY;
		
		b1.m_angularVelocity -= b1.m_invI * (r1X * PY - r1Y * PX);
		
		
		b2.m_linearVelocity.x += b2.m_invMass * PX;
		b2.m_linearVelocity.y += b2.m_invMass * PY;
		
		b2.m_angularVelocity += b2.m_invI * (r2X * PY - r2Y * PX);
		
		if (this.m_enableMotor && this.m_limitState != b2Joint.e_equalLimits)
		{
			var motorCdot = b2.m_angularVelocity - b1.m_angularVelocity - this.m_motorSpeed;
			var motorForce = -step.inv_dt * this.m_motorMass * motorCdot;
			var oldMotorForce = this.m_motorForce;
			this.m_motorForce = b2Math.b2Clamp(this.m_motorForce + motorForce, -this.m_maxMotorTorque, this.m_maxMotorTorque);
			motorForce = this.m_motorForce - oldMotorForce;
			
			b1.m_angularVelocity -= b1.m_invI * step.dt * motorForce;
			b2.m_angularVelocity += b2.m_invI * step.dt * motorForce;
		}
		
		if (this.m_enableLimit && this.m_limitState != b2Joint.e_inactiveLimit)
		{
			var limitCdot = b2.m_angularVelocity - b1.m_angularVelocity;
			var limitForce = -step.inv_dt * this.m_motorMass * limitCdot;
			
			if (this.m_limitState == b2Joint.e_equalLimits)
			{
				this.m_limitForce += limitForce;
			}
			else if (this.m_limitState == b2Joint.e_atLowerLimit)
			{
				oldLimitForce = this.m_limitForce;
				this.m_limitForce = b2Math.b2Max(this.m_limitForce + limitForce, 0.0);
				limitForce = this.m_limitForce - oldLimitForce;
			}
			else if (this.m_limitState == b2Joint.e_atUpperLimit)
			{
				oldLimitForce = this.m_limitForce;
				this.m_limitForce = b2Math.b2Min(this.m_limitForce + limitForce, 0.0);
				limitForce = this.m_limitForce - oldLimitForce;
			}
			
			b1.m_angularVelocity -= b1.m_invI * step.dt * limitForce;
			b2.m_angularVelocity += b2.m_invI * step.dt * limitForce;
		}
	}
b2RevoluteJoint.prototype.SolvePositionConstraints = function () {
		
		var oldLimitImpulse;
		var limitC;
		
		var b1 = this.m_body1;
		var b2 = this.m_body2;
		
		var positionError = 0.0;
		
		var tMat;
		
		
		
		tMat = b1.m_xf.R;
		var r1X = this.m_localAnchor1.x - b1.m_sweep.localCenter.x;
		var r1Y = this.m_localAnchor1.y - b1.m_sweep.localCenter.y;
		var tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
		r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
		r1X = tX;
		
		tMat = b2.m_xf.R;
		var r2X = this.m_localAnchor2.x - b2.m_sweep.localCenter.x;
		var r2Y = this.m_localAnchor2.y - b2.m_sweep.localCenter.y;
		tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
		r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
		r2X = tX;
		
		
		var p1X = b1.m_sweep.c.x + r1X;
		var p1Y = b1.m_sweep.c.y + r1Y;
		
		var p2X = b2.m_sweep.c.x + r2X;
		var p2Y = b2.m_sweep.c.y + r2Y;
		
		
		var ptpCX = p2X - p1X;
		var ptpCY = p2Y - p1Y;
		
		
		positionError = Math.sqrt(ptpCX*ptpCX + ptpCY*ptpCY);
		
		
		
		
		
		
		var invMass1 = b1.m_invMass;
		var invMass2 = b2.m_invMass;
		
		var invI1 = b1.m_invI;
		var invI2 = b2.m_invI;
		
		
		this.K1.col1.x = invMass1 + invMass2;	this.K1.col2.x = 0.0;
		this.K1.col1.y = 0.0;					this.K1.col2.y = invMass1 + invMass2;
		
		
		this.K2.col1.x = invI1 * r1Y * r1Y;	this.K2.col2.x = -invI1 * r1X * r1Y;
		this.K2.col1.y = -invI1 * r1X * r1Y;	this.K2.col2.y = invI1 * r1X * r1X;
		
		
		this.K3.col1.x = invI2 * r2Y * r2Y;		this.K3.col2.x = -invI2 * r2X * r2Y;
		this.K3.col1.y = -invI2 * r2X * r2Y;		this.K3.col2.y = invI2 * r2X * r2X;
		
		
		this.K.SetM(this.K1);
		this.K.AddM(this.K2);
		this.K.AddM(this.K3);
		
		this.K.Solve(b2RevoluteJoint.tImpulse, -ptpCX, -ptpCY);
		var impulseX = b2RevoluteJoint.tImpulse.x;
		var impulseY = b2RevoluteJoint.tImpulse.y;
		
		
		b1.m_sweep.c.x -= b1.m_invMass * impulseX;
		b1.m_sweep.c.y -= b1.m_invMass * impulseY;
		
		b1.m_sweep.a -= b1.m_invI * (r1X * impulseY - r1Y * impulseX);
		
		
		b2.m_sweep.c.x += b2.m_invMass * impulseX;
		b2.m_sweep.c.y += b2.m_invMass * impulseY;
		
		b2.m_sweep.a += b2.m_invI * (r2X * impulseY - r2Y * impulseX);
		
		b1.SynchronizeTransform();
		b2.SynchronizeTransform();
		
		
		
		var angularError = 0.0;
		
		if (this.m_enableLimit && this.m_limitState != b2Joint.e_inactiveLimit)
		{
			var angle = b2.m_sweep.a - b1.m_sweep.a - this.m_referenceAngle;
			var limitImpulse = 0.0;
			
			if (this.m_limitState == b2Joint.e_equalLimits)
			{
				
				limitC = b2Math.b2Clamp(angle, -b2Settings.b2_maxAngularCorrection, b2Settings.b2_maxAngularCorrection);
				limitImpulse = -this.m_motorMass * limitC;
				angularError = b2Math.b2Abs(limitC);
			}
			else if (this.m_limitState == b2Joint.e_atLowerLimit)
			{
				limitC = angle - this.m_lowerAngle;
				angularError = b2Math.b2Max(0.0, -limitC);
				
				
				limitC = b2Math.b2Clamp(limitC + b2Settings.b2_angularSlop, -b2Settings.b2_maxAngularCorrection, 0.0);
				limitImpulse = -this.m_motorMass * limitC;
				oldLimitImpulse = this.m_limitPositionImpulse;
				this.m_limitPositionImpulse = b2Math.b2Max(this.m_limitPositionImpulse + limitImpulse, 0.0);
				limitImpulse = this.m_limitPositionImpulse - oldLimitImpulse;
			}
			else if (this.m_limitState == b2Joint.e_atUpperLimit)
			{
				limitC = angle - this.m_upperAngle;
				angularError = b2Math.b2Max(0.0, limitC);
				
				
				limitC = b2Math.b2Clamp(limitC - b2Settings.b2_angularSlop, 0.0, b2Settings.b2_maxAngularCorrection);
				limitImpulse = -this.m_motorMass * limitC;
				oldLimitImpulse = this.m_limitPositionImpulse;
				this.m_limitPositionImpulse = b2Math.b2Min(this.m_limitPositionImpulse + limitImpulse, 0.0);
				limitImpulse = this.m_limitPositionImpulse - oldLimitImpulse;
			}
			
			b1.m_sweep.a -= b1.m_invI * limitImpulse;
			b2.m_sweep.a += b2.m_invI * limitImpulse;
			
			b1.SynchronizeTransform();
			b2.SynchronizeTransform();
		}
		
		return positionError <= b2Settings.b2_linearSlop && angularError <= b2Settings.b2_angularSlop;
	}
exports.b2RevoluteJoint = b2RevoluteJoint;
	
	
var b2PrismaticJoint = function() {
b2Joint.prototype.__varz.call(this)
this.__varz();
this.__constructor.apply(this, arguments);
}
extend(b2PrismaticJoint.prototype, b2Joint.prototype)
b2PrismaticJoint.prototype._super = function(){ b2Joint.prototype.__constructor.apply(this, arguments) }
b2PrismaticJoint.prototype.__constructor = function (def) {
		this._super(def);
		
		var tMat;
		var tX;
		var tY;
		
		this.m_localAnchor1.SetV(def.localAnchor1);
		this.m_localAnchor2.SetV(def.localAnchor2);
		this.m_localXAxis1.SetV(def.localAxis1);
		
		
		this.m_localYAxis1.x = -this.m_localXAxis1.y;
		this.m_localYAxis1.y = this.m_localXAxis1.x;
		
		this.m_refAngle = def.referenceAngle;
		
		this.m_linearJacobian.SetZero();
		this.m_linearMass = 0.0;
		this.m_force = 0.0;
		
		this.m_angularMass = 0.0;
		this.m_torque = 0.0;
		
		this.m_motorJacobian.SetZero();
		this.m_motorMass = 0.0;
		this.m_motorForce = 0.0;
		this.m_limitForce = 0.0;
		this.m_limitPositionImpulse = 0.0;
		
		this.m_lowerTranslation = def.lowerTranslation;
		this.m_upperTranslation = def.upperTranslation;
		this.m_maxMotorForce = def.maxMotorForce;
		this.m_motorSpeed = def.motorSpeed;
		this.m_enableLimit = def.enableLimit;
		this.m_enableMotor = def.enableMotor;
	}
b2PrismaticJoint.prototype.__varz = function(){
this.m_localAnchor1 =  new b2Vec2();
this.m_localAnchor2 =  new b2Vec2();
this.m_localXAxis1 =  new b2Vec2();
this.m_localYAxis1 =  new b2Vec2();
this.m_linearJacobian =  new b2Jacobian();
this.m_motorJacobian =  new b2Jacobian();
}
b2PrismaticJoint.prototype.m_localAnchor1 =  new b2Vec2();
b2PrismaticJoint.prototype.m_localAnchor2 =  new b2Vec2();
b2PrismaticJoint.prototype.m_localXAxis1 =  new b2Vec2();
b2PrismaticJoint.prototype.m_localYAxis1 =  new b2Vec2();
b2PrismaticJoint.prototype.m_refAngle =  null;
b2PrismaticJoint.prototype.m_linearJacobian =  new b2Jacobian();
b2PrismaticJoint.prototype.m_linearMass =  null;
b2PrismaticJoint.prototype.m_force =  null;
b2PrismaticJoint.prototype.m_angularMass =  null;
b2PrismaticJoint.prototype.m_torque =  null;
b2PrismaticJoint.prototype.m_motorJacobian =  new b2Jacobian();
b2PrismaticJoint.prototype.m_motorMass =  null;
b2PrismaticJoint.prototype.m_motorForce =  null;
b2PrismaticJoint.prototype.m_limitForce =  null;
b2PrismaticJoint.prototype.m_limitPositionImpulse =  null;
b2PrismaticJoint.prototype.m_lowerTranslation =  null;
b2PrismaticJoint.prototype.m_upperTranslation =  null;
b2PrismaticJoint.prototype.m_maxMotorForce =  null;
b2PrismaticJoint.prototype.m_motorSpeed =  null;
b2PrismaticJoint.prototype.m_enableLimit =  null;
b2PrismaticJoint.prototype.m_enableMotor =  null;
b2PrismaticJoint.prototype.m_limitState =  0;
b2PrismaticJoint.prototype.GetAnchor1 = function () {
		return this.m_body1.GetWorldPoint(this.m_localAnchor1);
	}
b2PrismaticJoint.prototype.GetAnchor2 = function () {
		return this.m_body2.GetWorldPoint(this.m_localAnchor2);
	}
b2PrismaticJoint.prototype.GetReactionForce = function () {
		var tMat = this.m_body1.m_xf.R;
		
		var ax1X = this.m_limitForce* (tMat.col1.x * this.m_localXAxis1.x + tMat.col2.x * this.m_localXAxis1.y);
		var ax1Y = this.m_limitForce* (tMat.col1.y * this.m_localXAxis1.x + tMat.col2.y * this.m_localXAxis1.y);
		
		var ay1X = this.m_force* (tMat.col1.x * this.m_localYAxis1.x + tMat.col2.x * this.m_localYAxis1.y);
		var ay1Y = this.m_force* (tMat.col1.y * this.m_localYAxis1.x + tMat.col2.y * this.m_localYAxis1.y);
		
		
		return new b2Vec2( this.m_limitForce*ax1X + this.m_force*ay1X, this.m_limitForce*ax1Y + this.m_force*ay1Y);
	}
b2PrismaticJoint.prototype.GetReactionTorque = function () {
		return this.m_torque;
	}
b2PrismaticJoint.prototype.GetJointTranslation = function () {
		var b1 = this.m_body1;
		var b2 = this.m_body2;
		
		var tMat;
		
		var p1 = b1.GetWorldPoint(this.m_localAnchor1);
		var p2 = b2.GetWorldPoint(this.m_localAnchor2);
		
		var dX = p2.x - p1.x;
		var dY = p2.y - p1.y;
		
		var axis = b1.GetWorldVector(this.m_localXAxis1);
		
		
		var translation = axis.x*dX + axis.y*dY;
		return translation;
	}
b2PrismaticJoint.prototype.GetJointSpeed = function () {
		var b1 = this.m_body1;
		var b2 = this.m_body2;
		
		var tMat;
		
		
		tMat = b1.m_xf.R;
		var r1X = this.m_localAnchor1.x - b1.m_sweep.localCenter.x;
		var r1Y = this.m_localAnchor1.y - b1.m_sweep.localCenter.y;
		var tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
		r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
		r1X = tX;
		
		tMat = b2.m_xf.R;
		var r2X = this.m_localAnchor2.x - b2.m_sweep.localCenter.x;
		var r2Y = this.m_localAnchor2.y - b2.m_sweep.localCenter.y;
		tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
		r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
		r2X = tX;
		
		
		var p1X = b1.m_sweep.c.x + r1X;
		var p1Y = b1.m_sweep.c.y + r1Y;
		
		var p2X = b2.m_sweep.c.x + r2X;
		var p2Y = b2.m_sweep.c.y + r2Y;
		
		var dX = p2X - p1X;
		var dY = p2Y - p1Y;
		
		var axis = b1.GetWorldVector(this.m_localXAxis1);
		
		var v1 = b1.m_linearVelocity;
		var v2 = b2.m_linearVelocity;
		var w1 = b1.m_angularVelocity;
		var w2 = b2.m_angularVelocity;
		
		
		
		
		var speed = (dX*(-w1 * axis.y) + dY*(w1 * axis.x)) + (axis.x * ((( v2.x + (-w2 * r2Y)) - v1.x) - (-w1 * r1Y)) + axis.y * ((( v2.y + (w2 * r2X)) - v1.y) - (w1 * r1X)));
		
		return speed;
	}
b2PrismaticJoint.prototype.IsLimitEnabled = function () {
		return this.m_enableLimit;
	}
b2PrismaticJoint.prototype.EnableLimit = function (flag) {
		this.m_enableLimit = flag;
	}
b2PrismaticJoint.prototype.GetLowerLimit = function () {
		return this.m_lowerTranslation;
	}
b2PrismaticJoint.prototype.GetUpperLimit = function () {
		return this.m_upperTranslation;
	}
b2PrismaticJoint.prototype.SetLimits = function (lower, upper) {
		
		this.m_lowerTranslation = lower;
		this.m_upperTranslation = upper;
	}
b2PrismaticJoint.prototype.IsMotorEnabled = function () {
		return this.m_enableMotor;
	}
b2PrismaticJoint.prototype.EnableMotor = function (flag) {
		this.m_enableMotor = flag;
	}
b2PrismaticJoint.prototype.SetMotorSpeed = function (speed) {
		this.m_motorSpeed = speed;
	}
b2PrismaticJoint.prototype.GetMotorSpeed = function () {
		return this.m_motorSpeed;
	}
b2PrismaticJoint.prototype.SetMaxMotorForce = function (force) {
		this.m_maxMotorForce = force;
	}
b2PrismaticJoint.prototype.GetMotorForce = function () {
		return this.m_motorForce;
	}
b2PrismaticJoint.prototype.InitVelocityConstraints = function (step) {
		var b1 = this.m_body1;
		var b2 = this.m_body2;
		
		var tMat;
		var tX;
		
		
		
		tMat = b1.m_xf.R;
		var r1X = this.m_localAnchor1.x - b1.m_sweep.localCenter.x;
		var r1Y = this.m_localAnchor1.y - b1.m_sweep.localCenter.y;
		tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
		r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
		r1X = tX;
		
		tMat = b2.m_xf.R;
		var r2X = this.m_localAnchor2.x - b2.m_sweep.localCenter.x;
		var r2Y = this.m_localAnchor2.y - b2.m_sweep.localCenter.y;
		tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
		r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
		r2X = tX;
		
		
		var invMass1 = b1.m_invMass;
		var invMass2 = b2.m_invMass;
		
		var invI1 = b1.m_invI;
		var invI2 = b2.m_invI;
		
		
		
		
		tMat = b1.m_xf.R;
		var ay1X = tMat.col1.x * this.m_localYAxis1.x + tMat.col2.x * this.m_localYAxis1.y;
		var ay1Y = tMat.col1.y * this.m_localYAxis1.x + tMat.col2.y * this.m_localYAxis1.y;
		
		var eX = b2.m_sweep.c.x + r2X - b1.m_sweep.c.x;
		var eY = b2.m_sweep.c.y + r2Y - b1.m_sweep.c.y;
		
		
		this.m_linearJacobian.linear1.x = -ay1X; 
		this.m_linearJacobian.linear1.y = -ay1Y;
		this.m_linearJacobian.linear2.x = ay1X; 
		this.m_linearJacobian.linear2.y = ay1Y;
		this.m_linearJacobian.angular1 = -(eX * ay1Y - eY * ay1X); 
		this.m_linearJacobian.angular2 = r2X * ay1Y - r2Y * ay1X; 
		
		this.m_linearMass =	invMass1 + invI1 * this.m_linearJacobian.angular1 * this.m_linearJacobian.angular1 +
						invMass2 + invI2 * this.m_linearJacobian.angular2 * this.m_linearJacobian.angular2;
		
		this.m_linearMass = 1.0 / this.m_linearMass;
		
		
		this.m_angularMass = invI1 + invI2;
		if (this.m_angularMass > Number.MIN_VALUE)
		{
			this.m_angularMass = 1.0 / this.m_angularMass;
		}
		
		
		if (this.m_enableLimit || this.m_enableMotor)
		{
			
			
			tMat = b1.m_xf.R;
			var ax1X = tMat.col1.x * this.m_localXAxis1.x + tMat.col2.x * this.m_localXAxis1.y;
			var ax1Y = tMat.col1.y * this.m_localXAxis1.x + tMat.col2.y * this.m_localXAxis1.y;
			
			this.m_motorJacobian.linear1.x = -ax1X; this.m_motorJacobian.linear1.y = -ax1Y;
			this.m_motorJacobian.linear2.x = ax1X; this.m_motorJacobian.linear2.y = ax1Y;
			this.m_motorJacobian.angular1 = -(eX * ax1Y - eY * ax1X); 
			this.m_motorJacobian.angular2 = r2X * ax1Y - r2Y * ax1X; 
			
			this.m_motorMass =	invMass1 + invI1 * this.m_motorJacobian.angular1 * this.m_motorJacobian.angular1 +
							invMass2 + invI2 * this.m_motorJacobian.angular2 * this.m_motorJacobian.angular2;
			
			this.m_motorMass = 1.0 / this.m_motorMass;
			
			if (this.m_enableLimit)
			{
				
				var dX = eX - r1X;
				var dY = eY - r1Y;
				
				var jointTranslation = ax1X * dX + ax1Y * dY;
				if (b2Math.b2Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2.0 * b2Settings.b2_linearSlop)
				{
					this.m_limitState = b2Joint.e_equalLimits;
				}
				else if (jointTranslation <= this.m_lowerTranslation)
				{
					if (this.m_limitState != b2Joint.e_atLowerLimit)
					{
						this.m_limitForce = 0.0;
					}
					this.m_limitState = b2Joint.e_atLowerLimit;
				}
				else if (jointTranslation >= this.m_upperTranslation)
				{
					if (this.m_limitState != b2Joint.e_atUpperLimit)
					{
						this.m_limitForce = 0.0;
					}
					this.m_limitState = b2Joint.e_atUpperLimit;
				}
				else
				{
					this.m_limitState = b2Joint.e_inactiveLimit;
					this.m_limitForce = 0.0;
				}
			}
		}
		
		if (this.m_enableMotor == false)
		{
			this.m_motorForce = 0.0;
		}
		
		if (this.m_enableLimit == false)
		{
			this.m_limitForce = 0.0;
		}
		
		if (step.warmStarting)
		{
			
			var P1X = step.dt * (this.m_force * this.m_linearJacobian.linear1.x + (this.m_motorForce + this.m_limitForce) * this.m_motorJacobian.linear1.x);
			var P1Y = step.dt * (this.m_force * this.m_linearJacobian.linear1.y + (this.m_motorForce + this.m_limitForce) * this.m_motorJacobian.linear1.y);
			
			var P2X = step.dt * (this.m_force * this.m_linearJacobian.linear2.x + (this.m_motorForce + this.m_limitForce) * this.m_motorJacobian.linear2.x);
			var P2Y = step.dt * (this.m_force * this.m_linearJacobian.linear2.y + (this.m_motorForce + this.m_limitForce) * this.m_motorJacobian.linear2.y);
			
			var L1 = step.dt * (this.m_force * this.m_linearJacobian.angular1 - this.m_torque + (this.m_motorForce + this.m_limitForce) * this.m_motorJacobian.angular1);
			
			var L2 = step.dt * (this.m_force * this.m_linearJacobian.angular2 + this.m_torque + (this.m_motorForce + this.m_limitForce) * this.m_motorJacobian.angular2);
			
			
			b1.m_linearVelocity.x += invMass1 * P1X;
			b1.m_linearVelocity.y += invMass1 * P1Y;
			
			b1.m_angularVelocity += invI1 * L1;
			
			
			b2.m_linearVelocity.x += invMass2 * P2X;
			b2.m_linearVelocity.y += invMass2 * P2Y;
			
			b2.m_angularVelocity += invI2 * L2;
		}
		else
		{
			this.m_force = 0.0;
			this.m_torque = 0.0;
			this.m_limitForce = 0.0;
			this.m_motorForce = 0.0;
		}
		
		this.m_limitPositionImpulse = 0.0;
		
	}
b2PrismaticJoint.prototype.SolveVelocityConstraints = function (step) {
		var b1 = this.m_body1;
		var b2 = this.m_body2;
		
		var invMass1 = b1.m_invMass;
		var invMass2 = b2.m_invMass;
		var invI1 = b1.m_invI;
		var invI2 = b2.m_invI;
		
		var oldLimitForce;
		
		
		var linearCdot = this.m_linearJacobian.Compute(b1.m_linearVelocity, b1.m_angularVelocity, b2.m_linearVelocity, b2.m_angularVelocity);
		var force = -step.inv_dt * this.m_linearMass * linearCdot;
		this.m_force += force;
		
		var P = step.dt * force;
		
		b1.m_linearVelocity.x += (invMass1 * P) * this.m_linearJacobian.linear1.x;
		b1.m_linearVelocity.y += (invMass1 * P) * this.m_linearJacobian.linear1.y;
		
		b1.m_angularVelocity += invI1 * P * this.m_linearJacobian.angular1;
		
		
		b2.m_linearVelocity.x += (invMass2 * P) * this.m_linearJacobian.linear2.x;
		b2.m_linearVelocity.y += (invMass2 * P) * this.m_linearJacobian.linear2.y;
		
		b2.m_angularVelocity += invI2 * P * this.m_linearJacobian.angular2;
		
		
		var angularCdot = b2.m_angularVelocity - b1.m_angularVelocity;
		var torque = -step.inv_dt * this.m_angularMass * angularCdot;
		this.m_torque += torque;
		
		var L = step.dt * torque;
		b1.m_angularVelocity -= invI1 * L;
		b2.m_angularVelocity += invI2 * L;
		
		
		if (this.m_enableMotor && this.m_limitState != b2Joint.e_equalLimits)
		{
			var motorCdot = this.m_motorJacobian.Compute(b1.m_linearVelocity, b1.m_angularVelocity, b2.m_linearVelocity, b2.m_angularVelocity) - this.m_motorSpeed;
			var motorForce = -step.inv_dt * this.m_motorMass * motorCdot;
			var oldMotorForce = this.m_motorForce;
			this.m_motorForce = b2Math.b2Clamp(this.m_motorForce + motorForce, -this.m_maxMotorForce, this.m_maxMotorForce);
			motorForce = this.m_motorForce - oldMotorForce;
			
			P = step.dt * motorForce;
			
			b1.m_linearVelocity.x += (invMass1 * P) * this.m_motorJacobian.linear1.x;
			b1.m_linearVelocity.y += (invMass1 * P) * this.m_motorJacobian.linear1.y;
			
			b1.m_angularVelocity += invI1 * P * this.m_motorJacobian.angular1;
			
			
			b2.m_linearVelocity.x += (invMass2 * P) * this.m_motorJacobian.linear2.x;
			b2.m_linearVelocity.y += (invMass2 * P) * this.m_motorJacobian.linear2.y;
			
			b2.m_angularVelocity += invI2 * P * this.m_motorJacobian.angular2;
		}
		
		
		if (this.m_enableLimit && this.m_limitState != b2Joint.e_inactiveLimit)
		{
			var limitCdot = this.m_motorJacobian.Compute(b1.m_linearVelocity, b1.m_angularVelocity, b2.m_linearVelocity, b2.m_angularVelocity);
			var limitForce = -step.inv_dt * this.m_motorMass * limitCdot;
			
			if (this.m_limitState == b2Joint.e_equalLimits)
			{
				this.m_limitForce += limitForce;
			}
			else if (this.m_limitState == b2Joint.e_atLowerLimit)
			{
				oldLimitForce = this.m_limitForce;
				this.m_limitForce = b2Math.b2Max(this.m_limitForce + limitForce, 0.0);
				limitForce = this.m_limitForce - oldLimitForce;
			}
			else if (this.m_limitState == b2Joint.e_atUpperLimit)
			{
				oldLimitForce = this.m_limitForce;
				this.m_limitForce = b2Math.b2Min(this.m_limitForce + limitForce, 0.0);
				limitForce = this.m_limitForce - oldLimitForce;
			}
			
			P = step.dt * limitForce;
			
			b1.m_linearVelocity.x += (invMass1 * P) * this.m_motorJacobian.linear1.x;
			b1.m_linearVelocity.y += (invMass1 * P) * this.m_motorJacobian.linear1.y;
			
			b1.m_angularVelocity += invI1 * P * this.m_motorJacobian.angular1;
			
			
			b2.m_linearVelocity.x += (invMass2 * P) * this.m_motorJacobian.linear2.x;
			b2.m_linearVelocity.y += (invMass2 * P) * this.m_motorJacobian.linear2.y;
			
			b2.m_angularVelocity += invI2 * P * this.m_motorJacobian.angular2;
		}
	}
b2PrismaticJoint.prototype.SolvePositionConstraints = function () {
		
		var limitC;
		var oldLimitImpulse;
		
		var b1 = this.m_body1;
		var b2 = this.m_body2;
		
		var invMass1 = b1.m_invMass;
		var invMass2 = b2.m_invMass;
		var invI1 = b1.m_invI;
		var invI2 = b2.m_invI;
		
		var tMat;
		var tX;
		
		
		tMat = b1.m_xf.R;
		var r1X = this.m_localAnchor1.x - b1.m_sweep.localCenter.x;
		var r1Y = this.m_localAnchor1.y - b1.m_sweep.localCenter.y;
		tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
		r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
		r1X = tX;
		
		tMat = b2.m_xf.R;
		var r2X = this.m_localAnchor2.x - b2.m_sweep.localCenter.x;
		var r2Y = this.m_localAnchor2.y - b2.m_sweep.localCenter.y;
		tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
		r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
		r2X = tX;
		
		
		var p1X = b1.m_sweep.c.x + r1X;
		var p1Y = b1.m_sweep.c.y + r1Y;
		
		var p2X = b2.m_sweep.c.x + r2X;
		var p2Y = b2.m_sweep.c.y + r2Y;
		
		var dX = p2X - p1X;
		var dY = p2Y - p1Y;
		
		tMat = b1.m_xf.R;
		var ay1X = tMat.col1.x * this.m_localYAxis1.x + tMat.col2.x * this.m_localYAxis1.y;
		var ay1Y = tMat.col1.y * this.m_localYAxis1.x + tMat.col2.y * this.m_localYAxis1.y;
		
		
		
		var linearC = ay1X*dX + ay1Y*dY;
		
		linearC = b2Math.b2Clamp(linearC, -b2Settings.b2_maxLinearCorrection, b2Settings.b2_maxLinearCorrection);
		var linearImpulse = -this.m_linearMass * linearC;
		
		
		b1.m_sweep.c.x += (invMass1 * linearImpulse) * this.m_linearJacobian.linear1.x;
		b1.m_sweep.c.y += (invMass1 * linearImpulse) * this.m_linearJacobian.linear1.y;
		
		b1.m_sweep.a += invI1 * linearImpulse * this.m_linearJacobian.angular1;
		
		
		
		b2.m_sweep.c.x += (invMass2 * linearImpulse) * this.m_linearJacobian.linear2.x;
		b2.m_sweep.c.y += (invMass2 * linearImpulse) * this.m_linearJacobian.linear2.y;
		
		b2.m_sweep.a += invI2 * linearImpulse * this.m_linearJacobian.angular2;
		
		
		var positionError = b2Math.b2Abs(linearC);
		
		
		var angularC = b2.m_sweep.a - b1.m_sweep.a - this.m_refAngle;
		
		angularC = b2Math.b2Clamp(angularC, -b2Settings.b2_maxAngularCorrection, b2Settings.b2_maxAngularCorrection);
		var angularImpulse = -this.m_angularMass * angularC;
		
		b1.m_sweep.a -= b1.m_invI * angularImpulse;
		b2.m_sweep.a += b2.m_invI * angularImpulse;
		b1.SynchronizeTransform();
		b2.SynchronizeTransform();
		
		var angularError = b2Math.b2Abs(angularC);
		
		
		if (this.m_enableLimit && this.m_limitState != b2Joint.e_inactiveLimit)
		{
			
			
			tMat = b1.m_xf.R;
			r1X = this.m_localAnchor1.x - b1.m_sweep.localCenter.x;
			r1Y = this.m_localAnchor1.y - b1.m_sweep.localCenter.y;
			tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
			r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
			r1X = tX;
			
			tMat = b2.m_xf.R;
			r2X = this.m_localAnchor2.x - b2.m_sweep.localCenter.x;
			r2Y = this.m_localAnchor2.y - b2.m_sweep.localCenter.y;
			tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
			r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
			r2X = tX;
			
			
			p1X = b1.m_sweep.c.x + r1X;
			p1Y = b1.m_sweep.c.y + r1Y;
			
			p2X = b2.m_sweep.c.x + r2X;
			p2Y = b2.m_sweep.c.y + r2Y;
			
			dX = p2X - p1X;
			dY = p2Y - p1Y;
			
			tMat = b1.m_xf.R;
			var ax1X = tMat.col1.x * this.m_localXAxis1.x + tMat.col2.x * this.m_localXAxis1.y;
			var ax1Y = tMat.col1.y * this.m_localXAxis1.x + tMat.col2.y * this.m_localXAxis1.y;
			
			
			var translation = (ax1X*dX + ax1Y*dY);
			var limitImpulse = 0.0;
			
			if (this.m_limitState == b2Joint.e_equalLimits)
			{
				
				limitC = b2Math.b2Clamp(translation, -b2Settings.b2_maxLinearCorrection, b2Settings.b2_maxLinearCorrection);
				limitImpulse = -this.m_motorMass * limitC;
				positionError = b2Math.b2Max(positionError, b2Math.b2Abs(angularC));
			}
			else if (this.m_limitState == b2Joint.e_atLowerLimit)
			{
				limitC = translation - this.m_lowerTranslation;
				positionError = b2Math.b2Max(positionError, -limitC);
				
				
				limitC = b2Math.b2Clamp(limitC + b2Settings.b2_linearSlop, -b2Settings.b2_maxLinearCorrection, 0.0);
				limitImpulse = -this.m_motorMass * limitC;
				oldLimitImpulse = this.m_limitPositionImpulse;
				this.m_limitPositionImpulse = b2Math.b2Max(this.m_limitPositionImpulse + limitImpulse, 0.0);
				limitImpulse = this.m_limitPositionImpulse - oldLimitImpulse;
			}
			else if (this.m_limitState == b2Joint.e_atUpperLimit)
			{
				limitC = translation - this.m_upperTranslation;
				positionError = b2Math.b2Max(positionError, limitC);
				
				
				limitC = b2Math.b2Clamp(limitC - b2Settings.b2_linearSlop, 0.0, b2Settings.b2_maxLinearCorrection);
				limitImpulse = -this.m_motorMass * limitC;
				oldLimitImpulse = this.m_limitPositionImpulse;
				this.m_limitPositionImpulse = b2Math.b2Min(this.m_limitPositionImpulse + limitImpulse, 0.0);
				limitImpulse = this.m_limitPositionImpulse - oldLimitImpulse;
			}
			
			
			b1.m_sweep.c.x += (invMass1 * limitImpulse) * this.m_motorJacobian.linear1.x;
			b1.m_sweep.c.y += (invMass1 * limitImpulse) * this.m_motorJacobian.linear1.y;
			
			b1.m_sweep.a += invI1 * limitImpulse * this.m_motorJacobian.angular1;
			
			
			b2.m_sweep.c.x += (invMass2 * limitImpulse) * this.m_motorJacobian.linear2.x;
			b2.m_sweep.c.y += (invMass2 * limitImpulse) * this.m_motorJacobian.linear2.y;
			
			b2.m_sweep.a += invI2 * limitImpulse * this.m_motorJacobian.angular2;
			
			b1.SynchronizeTransform();
			b2.SynchronizeTransform();
			
		}
		
		return positionError <= b2Settings.b2_linearSlop && angularError <= b2Settings.b2_angularSlop;
		
	}	
exports.b2PrismaticJoint = b2PrismaticJoint;


var b2World = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2World.prototype.__constructor = function (worldAABB, gravity, doSleep) {
		
		this.m_destructionListener = null;
		this.m_boundaryListener = null;
		this.m_contactFilter = b2ContactFilter.b2_defaultFilter;
		this.m_contactListener = null;
		this.m_debugDraw = null;
		
		this.m_bodyList = null;
		this.m_contactList = null;
		this.m_jointList = null;
		
		this.m_bodyCount = 0;
		this.m_contactCount = 0;
		this.m_jointCount = 0;
		
		b2World.m_positionCorrection = true;
		b2World.m_warmStarting = true;
		b2World.m_continuousPhysics = true;
		
		this.m_allowSleep = doSleep;
		this.m_gravity = gravity;
		
		this.m_lock = false;
		
		this.m_inv_dt0 = 0.0;
		
		this.m_contactManager.m_world = this;
		
		this.m_broadPhase = new b2BroadPhase(worldAABB, this.m_contactManager);
		
		var bd = new b2BodyDef();
		this.m_groundBody = this.CreateBody(bd);
	}
b2World.prototype.__varz = function(){
this.m_contactManager =  new b2ContactManager();
}
// static attributes
b2World.m_positionCorrection =  null;
b2World.m_warmStarting =  null;
b2World.m_continuousPhysics =  null;
b2World.s_jointColor =  new b2Color(0.5, 0.8, 0.8);
b2World.s_coreColor =  new b2Color(0.9, 0.6, 0.6);
b2World.s_xf =  new b2XForm();
// static methods
// attributes
b2World.prototype.m_blockAllocator =  null;
b2World.prototype.m_stackAllocator =  null;
b2World.prototype.m_lock =  null;
b2World.prototype.m_broadPhase =  null;
b2World.prototype.m_contactManager =  new b2ContactManager();
b2World.prototype.m_bodyList =  null;
b2World.prototype.m_jointList =  null;
b2World.prototype.m_contactList =  null;
b2World.prototype.m_bodyCount =  0;
b2World.prototype.m_contactCount =  0;
b2World.prototype.m_jointCount =  0;
b2World.prototype.m_gravity =  null;
b2World.prototype.m_allowSleep =  null;
b2World.prototype.m_groundBody =  null;
b2World.prototype.m_destructionListener =  null;
b2World.prototype.m_boundaryListener =  null;
b2World.prototype.m_contactFilter =  null;
b2World.prototype.m_contactListener =  null;
b2World.prototype.m_debugDraw =  null;
b2World.prototype.m_inv_dt0 =  null;
b2World.prototype.m_positionIterationCount =  0;
// methods
b2World.prototype.SetDestructionListener = function (listener) {
		this.m_destructionListener = listener;
	}
b2World.prototype.SetBoundaryListener = function (listener) {
		this.m_boundaryListener = listener;
	}
b2World.prototype.SetContactFilter = function (filter) {
		this.m_contactFilter = filter;
	}
b2World.prototype.SetContactListener = function (listener) {
		this.m_contactListener = listener;
	}
b2World.prototype.SetDebugDraw = function (debugDraw) {
		this.m_debugDraw = debugDraw;
	}
b2World.prototype.Validate = function () {
		this.m_broadPhase.Validate();
	}
b2World.prototype.GetProxyCount = function () {
		return this.m_broadPhase.m_proxyCount;
	}
b2World.prototype.GetPairCount = function () {
		return this.m_broadPhase.m_pairManager.m_pairCount;
	}
b2World.prototype.CreateBody = function (def) {
		
		
		if (this.m_lock == true)
		{
			return null;
		}
		
		
		var b = new b2Body(def, this);
		
		
		b.m_prev = null;
		b.m_next = this.m_bodyList;
		if (this.m_bodyList)
		{
			this.m_bodyList.m_prev = b;
		}
		this.m_bodyList = b;
		++this.m_bodyCount;
		
		return b;
		
	}
b2World.prototype.DestroyBody = function (b) {
		
		
		
		if (this.m_lock == true)
		{
			return;
		}
		
		
		var jn = b.m_jointList;
		while (jn)
		{
			var jn0 = jn;
			jn = jn.next;
			
			if (this.m_destructionListener)
			{
				this.m_destructionListener.SayGoodbyeJoint(jn0.joint);
			}
			
			this.DestroyJoint(jn0.joint);
		}
		
		
		
		var s = b.m_shapeList;
		while (s)
		{
			var s0 = s;
			s = s.m_next;
			
			if (this.m_destructionListener)
			{
				this.m_destructionListener.SayGoodbyeShape(s0);
			}
			
			s0.DestroyProxy(this.m_broadPhase);
			b2Shape.Destroy(s0, this.m_blockAllocator);
		}
		
		
		if (b.m_prev)
		{
			b.m_prev.m_next = b.m_next;
		}
		
		if (b.m_next)
		{
			b.m_next.m_prev = b.m_prev;
		}
		
		if (b == this.m_bodyList)
		{
			this.m_bodyList = b.m_next;
		}
		
		--this.m_bodyCount;
		
		
		
	}
b2World.prototype.CreateJoint = function (def) {
		
		
		
		var j = b2Joint.Create(def, this.m_blockAllocator);
		
		
		j.m_prev = null;
		j.m_next = this.m_jointList;
		if (this.m_jointList)
		{
			this.m_jointList.m_prev = j;
		}
		this.m_jointList = j;
		++this.m_jointCount;
		
		
		j.m_node1.joint = j;
		j.m_node1.other = j.m_body2;
		j.m_node1.prev = null;
		j.m_node1.next = j.m_body1.m_jointList;
		if (j.m_body1.m_jointList) j.m_body1.m_jointList.prev = j.m_node1;
		j.m_body1.m_jointList = j.m_node1;
		
		j.m_node2.joint = j;
		j.m_node2.other = j.m_body1;
		j.m_node2.prev = null;
		j.m_node2.next = j.m_body2.m_jointList;
		if (j.m_body2.m_jointList) j.m_body2.m_jointList.prev = j.m_node2;
		j.m_body2.m_jointList = j.m_node2;
		
		
		if (def.collideConnected == false)
		{
			
			var b = def.body1.m_shapeCount < def.body2.m_shapeCount ? def.body1 : def.body2;
			for (var s = b.m_shapeList; s; s = s.m_next)
			{
				s.RefilterProxy(this.m_broadPhase, b.m_xf);
			}
		}
		
		return j;
		
	}
b2World.prototype.DestroyJoint = function (j) {
		
		
		
		var collideConnected = j.m_collideConnected;
		
		
		if (j.m_prev)
		{
			j.m_prev.m_next = j.m_next;
		}
		
		if (j.m_next)
		{
			j.m_next.m_prev = j.m_prev;
		}
		
		if (j == this.m_jointList)
		{
			this.m_jointList = j.m_next;
		}
		
		
		var body1 = j.m_body1;
		var body2 = j.m_body2;
		
		
		body1.WakeUp();
		body2.WakeUp();
		
		
		if (j.m_node1.prev)
		{
			j.m_node1.prev.next = j.m_node1.next;
		}
		
		if (j.m_node1.next)
		{
			j.m_node1.next.prev = j.m_node1.prev;
		}
		
		if (j.m_node1 == body1.m_jointList)
		{
			body1.m_jointList = j.m_node1.next;
		}
		
		j.m_node1.prev = null;
		j.m_node1.next = null;
		
		
		if (j.m_node2.prev)
		{
			j.m_node2.prev.next = j.m_node2.next;
		}
		
		if (j.m_node2.next)
		{
			j.m_node2.next.prev = j.m_node2.prev;
		}
		
		if (j.m_node2 == body2.m_jointList)
		{
			body2.m_jointList = j.m_node2.next;
		}
		
		j.m_node2.prev = null;
		j.m_node2.next = null;
		
		b2Joint.Destroy(j, this.m_blockAllocator);
		
		
		--this.m_jointCount;
		
		
		if (collideConnected == false)
		{
			
			var b = body1.m_shapeCount < body2.m_shapeCount ? body1 : body2;
			for (var s = b.m_shapeList; s; s = s.m_next)
			{
				s.RefilterProxy(this.m_broadPhase, b.m_xf);
			}
		}
		
	}
b2World.prototype.Refilter = function (shape) {
		shape.RefilterProxy(this.m_broadPhase, shape.m_body.m_xf);
	}
b2World.prototype.SetWarmStarting = function (flag) { b2World.m_warmStarting = flag; }
b2World.prototype.SetPositionCorrection = function (flag) { b2World.m_positionCorrection = flag; }
b2World.prototype.SetContinuousPhysics = function (flag) { b2World.m_continuousPhysics = flag; }
b2World.prototype.GetBodyCount = function () {
		return this.m_bodyCount;
	}
b2World.prototype.GetJointCount = function () {
		return this.m_jointCount;
	}
b2World.prototype.GetContactCount = function () {
		return this.m_contactCount;
	}
b2World.prototype.SetGravity = function (gravity) {
		this.m_gravity = gravity;
	}
b2World.prototype.GetGroundBody = function () {
		return this.m_groundBody;
	}
b2World.prototype.Step = function (dt, iterations) {
		
		this.m_lock = true;
		
		var step = new b2TimeStep();
		step.dt = dt;
		step.maxIterations	= iterations;
		if (dt > 0.0)
		{
			step.inv_dt = 1.0 / dt;
		}
		else
		{
			step.inv_dt = 0.0;
		}
		
		step.dtRatio = this.m_inv_dt0 * dt;
		
		step.positionCorrection = b2World.m_positionCorrection;
		step.warmStarting = b2World.m_warmStarting;
		
		
		this.m_contactManager.Collide();
		
		
		if (step.dt > 0.0)
		{
			this.Solve(step);
		}
		
		
		if (b2World.m_continuousPhysics && step.dt > 0.0)
		{
			this.SolveTOI(step);
		}
		
		
		this.DrawDebugData();
		
		this.m_inv_dt0 = step.inv_dt;
		this.m_lock = false;
	}
b2World.prototype.Query = function (aabb, shapes, maxCount) {
		
		
		var results = new Array(maxCount);
		
		var count = this.m_broadPhase.QueryAABB(aabb, results, maxCount);
		
		for (var i = 0; i < count; ++i)
		{
			shapes[i] = results[i];
		}
		
		
		return count;
		
	}
b2World.prototype.GetBodyList = function () {
		return this.m_bodyList;
	}
b2World.prototype.GetJointList = function () {
		return this.m_jointList;
	}
b2World.prototype.Solve = function (step) {
		
		var b;
		
		this.m_positionIterationCount = 0;
		
		
		var island = new b2Island(this.m_bodyCount, this.m_contactCount, this.m_jointCount, this.m_stackAllocator, this.m_contactListener);
		
		
		for (b = this.m_bodyList; b; b = b.m_next)
		{
			b.m_flags &= ~b2Body.e_islandFlag;
		}
		for (var c = this.m_contactList; c; c = c.m_next)
		{
			c.m_flags &= ~b2Contact.e_islandFlag;
		}
		for (var j = this.m_jointList; j; j = j.m_next)
		{
			j.m_islandFlag = false;
		}
		
		
		var stackSize = this.m_bodyCount;
		
		var stack = new Array(stackSize);
		for (var seed = this.m_bodyList; seed; seed = seed.m_next)
		{
			if (seed.m_flags & (b2Body.e_islandFlag | b2Body.e_sleepFlag | b2Body.e_frozenFlag))
			{
				continue;
			}
			
			if (seed.IsStatic())
			{
				continue;
			}
			
			
			island.Clear();
			var stackCount = 0;
			stack[stackCount++] = seed;
			seed.m_flags |= b2Body.e_islandFlag;
			
			
			while (stackCount > 0)
			{
				
				b = stack[--stackCount];
				island.AddBody(b);
				
				
				b.m_flags &= ~b2Body.e_sleepFlag;
				
				
				
				if (b.IsStatic())
				{
					continue;
				}
				
				var other;
				
				for (var cn = b.m_contactList; cn; cn = cn.next)
				{
					
					if (cn.contact.m_flags & (b2Contact.e_islandFlag | b2Contact.e_nonSolidFlag))
					{
						continue;
					}
					
					
					if (cn.contact.m_manifoldCount == 0)
					{
						continue;
					}
					
					island.AddContact(cn.contact);
					cn.contact.m_flags |= b2Contact.e_islandFlag;
					
					
					other = cn.other;
					
					
					if (other.m_flags & b2Body.e_islandFlag)
					{
						continue;
					}
					
					
					stack[stackCount++] = other;
					other.m_flags |= b2Body.e_islandFlag;
				}
				
				
				for (var jn = b.m_jointList; jn; jn = jn.next)
				{
					if (jn.joint.m_islandFlag == true)
					{
						continue;
					}
					
					island.AddJoint(jn.joint);
					jn.joint.m_islandFlag = true;
					
					
					other = jn.other;
					if (other.m_flags & b2Body.e_islandFlag)
					{
						continue;
					}
					
					
					stack[stackCount++] = other;
					other.m_flags |= b2Body.e_islandFlag;
				}
			}
			
			island.Solve(step, this.m_gravity, b2World.m_positionCorrection, this.m_allowSleep);
			
			if (island.m_positionIterationCount > this.m_positionIterationCount) {
				this.m_positionIterationCount = island.m_positionIterationCount;
			}
			
			
			for (var i = 0; i < island.m_bodyCount; ++i)
			{
				
				b = island.m_bodies[i];
				if (b.IsStatic())
				{
					b.m_flags &= ~b2Body.e_islandFlag;
				}
			}
		}
		
		
		
		
		for (b = this.m_bodyList; b; b = b.m_next)
		{
			if (b.m_flags & (b2Body.e_sleepFlag | b2Body.e_frozenFlag))
			{
				continue;
			}
			
			if (b.IsStatic())
			{
				continue;
			}
			
			
			
			
			var inRange = b.SynchronizeShapes();
			
			
			if (inRange == false && this.m_boundaryListener != null)
			{
				this.m_boundaryListener.Violation(b);
			}
		}
		
		
		
		this.m_broadPhase.Commit();
		
	}
b2World.prototype.SolveTOI = function (step) {
		
		var b;
		var s1;
		var s2;
		var b1;
		var b2;
		var cn;
		
		
		var island = new b2Island(this.m_bodyCount, b2Settings.b2_maxTOIContactsPerIsland, 0, this.m_stackAllocator, this.m_contactListener);
		var stackSize = this.m_bodyCount;
		
		
		var stack = new Array(stackSize);
		
		for (b = this.m_bodyList; b; b = b.m_next)
		{
			b.m_flags &= ~b2Body.e_islandFlag;
			b.m_sweep.t0 = 0.0;
		}
		
		var c;
		for (c = this.m_contactList; c; c = c.m_next)
		{
			
			c.m_flags &= ~(b2Contact.e_toiFlag | b2Contact.e_islandFlag);
		}
		
		
		for (;;)
		{
			
			var minContact = null;
			var minTOI = 1.0;
			
			for (c = this.m_contactList; c; c = c.m_next)
			{
				if (c.m_flags & (b2Contact.e_slowFlag | b2Contact.e_nonSolidFlag))
				{
					continue;
				}
				
				
				
				var toi = 1.0;
				if (c.m_flags & b2Contact.e_toiFlag)
				{
					
					toi = c.m_toi;
				}
				else
				{
					
					s1 = c.m_shape1;
					s2 = c.m_shape2;
					b1 = s1.m_body;
					b2 = s2.m_body;
					
					if ((b1.IsStatic() || b1.IsSleeping()) && (b2.IsStatic() || b2.IsSleeping()))
					{
						continue;
					}
					
					
					var t0 = b1.m_sweep.t0;
					
					if (b1.m_sweep.t0 < b2.m_sweep.t0)
					{
						t0 = b2.m_sweep.t0;
						b1.m_sweep.Advance(t0);
					}
					else if (b2.m_sweep.t0 < b1.m_sweep.t0)
					{
						t0 = b1.m_sweep.t0;
						b2.m_sweep.Advance(t0);
					}
					
					
					
					
					toi = b2TimeOfImpact.TimeOfImpact(c.m_shape1, b1.m_sweep, c.m_shape2, b2.m_sweep);
					
					
					if (toi > 0.0 && toi < 1.0)
					{
						
						toi = (1.0 - toi) * t0 + toi;
						if (toi > 1) toi = 1;
					}
					
					
					c.m_toi = toi;
					c.m_flags |= b2Contact.e_toiFlag;
				}
				
				if (Number.MIN_VALUE < toi && toi < minTOI)
				{
					
					minContact = c;
					minTOI = toi;
				}
			}
			
			if (minContact == null || 1.0 - 100.0 * Number.MIN_VALUE < minTOI)
			{
				
				break;
			}
			
			
			s1 = minContact.m_shape1;
			s2 = minContact.m_shape2;
			b1 = s1.m_body;
			b2 = s2.m_body;
			b1.Advance(minTOI);
			b2.Advance(minTOI);
			
			
			minContact.Update(this.m_contactListener);
			minContact.m_flags &= ~b2Contact.e_toiFlag;
			
			if (minContact.m_manifoldCount == 0)
			{
				
				
				continue;
			}
			
			
			var seed = b1;
			if (seed.IsStatic())
			{
				seed = b2;
			}
			
			
			island.Clear();
			var stackCount = 0;
			stack[stackCount++] = seed;
			seed.m_flags |= b2Body.e_islandFlag;
			
			
			while (stackCount > 0)
			{
				
				b = stack[--stackCount];
				island.AddBody(b);
				
				
				b.m_flags &= ~b2Body.e_sleepFlag;
				
				
				
				if (b.IsStatic())
				{
					continue;
				}
				
				
				for (cn = b.m_contactList; cn; cn = cn.next)
				{
					
					if (island.m_contactCount == island.m_contactCapacity)
					{
						continue;
					}
					
					
					if (cn.contact.m_flags & (b2Contact.e_islandFlag | b2Contact.e_slowFlag | b2Contact.e_nonSolidFlag))
					{
						continue;
					}
					
					
					if (cn.contact.m_manifoldCount == 0)
					{
						continue;
					}
					
					island.AddContact(cn.contact);
					cn.contact.m_flags |= b2Contact.e_islandFlag;
					
					
					var other = cn.other;
					
					
					if (other.m_flags & b2Body.e_islandFlag)
					{
						continue;
					}
					
					
					if (other.IsStatic() == false)
					{
						other.Advance(minTOI);
						other.WakeUp();
					}
					
					
					stack[stackCount++] = other;
					other.m_flags |= b2Body.e_islandFlag;
				}
			}
			
			var subStep = new b2TimeStep();
			subStep.dt = (1.0 - minTOI) * step.dt;
			
			subStep.inv_dt = 1.0 / subStep.dt;
			subStep.maxIterations = step.maxIterations;
			
			island.SolveTOI(subStep);
			
			var i = 0;
			
			for (i = 0; i < island.m_bodyCount; ++i)
			{
				
				b = island.m_bodies[i];
				b.m_flags &= ~b2Body.e_islandFlag;
				
				if (b.m_flags & (b2Body.e_sleepFlag | b2Body.e_frozenFlag))
				{
					continue;
				}
				
				if (b.IsStatic())
				{
					continue;
				}
				
				
				
				
				var inRange = b.SynchronizeShapes();
				
				
				if (inRange == false && this.m_boundaryListener != null)
				{
					this.m_boundaryListener.Violation(b);
				}
				
				
				
				for (cn = b.m_contactList; cn; cn = cn.next)
				{
					cn.contact.m_flags &= ~b2Contact.e_toiFlag;
				}
			}
			
			for (i = 0; i < island.m_contactCount; ++i)
			{
				
				c = island.m_contacts[i];
				c.m_flags &= ~(b2Contact.e_toiFlag | b2Contact.e_islandFlag);
			}
			
			
			
			this.m_broadPhase.Commit();
		}
		
		
		
	}
b2World.prototype.DrawJoint = function (joint) {
		
		var b1 = joint.m_body1;
		var b2 = joint.m_body2;
		var xf1 = b1.m_xf;
		var xf2 = b2.m_xf;
		var x1 = xf1.position;
		var x2 = xf2.position;
		var p1 = joint.GetAnchor1();
		var p2 = joint.GetAnchor2();
		
		
		var color = b2World.s_jointColor;
		
		switch (joint.m_type)
		{
		case b2Joint.e_distanceJoint:
			this.m_debugDraw.DrawSegment(p1, p2, color);
			break;
		
		case b2Joint.e_pulleyJoint:
			{
				var pulley = (joint);
				var s1 = pulley.GetGroundAnchor1();
				var s2 = pulley.GetGroundAnchor2();
				this.m_debugDraw.DrawSegment(s1, p1, color);
				this.m_debugDraw.DrawSegment(s2, p2, color);
				this.m_debugDraw.DrawSegment(s1, s2, color);
			}
			break;
		
		case b2Joint.e_mouseJoint:
			this.m_debugDraw.DrawSegment(p1, p2, color);
			break;
		
		default:
			if (b1 != this.m_groundBody)
				this.m_debugDraw.DrawSegment(x1, p1, color);
			this.m_debugDraw.DrawSegment(p1, p2, color);
			if (b2 != this.m_groundBody)
				this.m_debugDraw.DrawSegment(x2, p2, color);
		}
	}
b2World.prototype.DrawShape = function (shape, xf, color, core) {
		
		var coreColor = b2World.s_coreColor;
		
		switch (shape.m_type)
		{
		case b2Shape.e_circleShape:
			{
				var circle = (shape);
				
				var center = b2Math.b2MulX(xf, circle.m_localPosition);
				var radius = circle.m_radius;
				var axis = xf.R.col1;
				
				this.m_debugDraw.DrawSolidCircle(center, radius, axis, color);
				
				if (core)
				{
					this.m_debugDraw.DrawCircle(center, radius - b2Settings.b2_toiSlop, coreColor);
				}
			}
			break;
		
		case b2Shape.e_polygonShape:
			{
				var i = 0;
				var poly = (shape);
				var vertexCount = poly.GetVertexCount();
				var localVertices = poly.GetVertices();
				
				
				var vertices = new Array(b2Settings.b2_maxPolygonVertices);
				
				for (i = 0; i < vertexCount; ++i)
				{
					vertices[i] = b2Math.b2MulX(xf, localVertices[i]);
				}
				
				this.m_debugDraw.DrawSolidPolygon(vertices, vertexCount, color);
				
				if (core)
				{
					var localCoreVertices = poly.GetCoreVertices();
					for (i = 0; i < vertexCount; ++i)
					{
						vertices[i] = b2Math.b2MulX(xf, localCoreVertices[i]);
					}
					this.m_debugDraw.DrawPolygon(vertices, vertexCount, coreColor);
				}
			}
			break;
		}
	}
b2World.prototype.DrawDebugData = function () {
		
		if (this.m_debugDraw == null)
		{
			return;
		}
		
		this.m_debugDraw.m_sprite.graphics.clear();
		
		var flags = this.m_debugDraw.GetFlags();
		
		var i = 0;
		var b;
		var s;
		var j;
		var bp;
		var invQ = new b2Vec2;
		var x1 = new b2Vec2;
		var x2 = new b2Vec2;
		var color = new b2Color(0,0,0);
		var xf;
		var b1 = new b2AABB();
		var b2 = new b2AABB();
		var vs = [new b2Vec2(), new b2Vec2(), new b2Vec2(), new b2Vec2()];
		
		if (flags & b2DebugDraw.e_shapeBit)
		{
			var core = (flags & b2DebugDraw.e_coreShapeBit) == b2DebugDraw.e_coreShapeBit;
			
			for (b = this.m_bodyList; b; b = b.m_next)
			{
				xf = b.m_xf;
				for (s = b.GetShapeList(); s; s = s.m_next)
				{
					if (b.IsStatic())
					{
						this.DrawShape(s, xf, new b2Color(0.5, 0.9, 0.5), core);
					}
					else if (b.IsSleeping())
					{
						this.DrawShape(s, xf, new b2Color(0.5, 0.5, 0.9), core);
					}
					else
					{
						this.DrawShape(s, xf, new b2Color(0.9, 0.9, 0.9), core);
					}
				}
			}
		}
		
		if (flags & b2DebugDraw.e_jointBit)
		{
			for (j = this.m_jointList; j; j = j.m_next)
			{
				
				
					this.DrawJoint(j);
				
			}
		}
		
		if (flags & b2DebugDraw.e_pairBit)
		{
			bp = this.m_broadPhase;
			
			invQ.Set(1.0 / bp.m_quantizationFactor.x, 1.0 / bp.m_quantizationFactor.y);
			
			color.Set(0.9, 0.9, 0.3);
			
			for (i = 0; i < b2Pair.b2_tableCapacity; ++i)
			{
				var index = bp.m_pairManager.m_hashTable[i];
				while (index != b2Pair.b2_nullPair)
				{
					var pair = bp.m_pairManager.m_pairs[ index ];
					var p1 = bp.m_proxyPool[ pair.proxyId1 ];
					var p2 = bp.m_proxyPool[ pair.proxyId2 ];
					
					
					b1.lowerBound.x = bp.m_worldAABB.lowerBound.x + invQ.x * bp.m_bounds[0][p1.lowerBounds[0]].value;
					b1.lowerBound.y = bp.m_worldAABB.lowerBound.y + invQ.y * bp.m_bounds[1][p1.lowerBounds[1]].value;
					b1.upperBound.x = bp.m_worldAABB.lowerBound.x + invQ.x * bp.m_bounds[0][p1.upperBounds[0]].value;
					b1.upperBound.y = bp.m_worldAABB.lowerBound.y + invQ.y * bp.m_bounds[1][p1.upperBounds[1]].value;
					b2.lowerBound.x = bp.m_worldAABB.lowerBound.x + invQ.x * bp.m_bounds[0][p2.lowerBounds[0]].value;
					b2.lowerBound.y = bp.m_worldAABB.lowerBound.y + invQ.y * bp.m_bounds[1][p2.lowerBounds[1]].value;
					b2.upperBound.x = bp.m_worldAABB.lowerBound.x + invQ.x * bp.m_bounds[0][p2.upperBounds[0]].value;
					b2.upperBound.y = bp.m_worldAABB.lowerBound.y + invQ.y * bp.m_bounds[1][p2.upperBounds[1]].value;
					
					
					x1.x = 0.5 * (b1.lowerBound.x + b1.upperBound.x);
					x1.y = 0.5 * (b1.lowerBound.y + b1.upperBound.y);
					
					x2.x = 0.5 * (b2.lowerBound.x + b2.upperBound.x);
					x2.y = 0.5 * (b2.lowerBound.y + b2.upperBound.y);
					
					this.m_debugDraw.DrawSegment(x1, x2, color);
					
					index = pair.next;
				}
			}
		}
		
		if (flags & b2DebugDraw.e_aabbBit)
		{
			bp = this.m_broadPhase;
			var worldLower = bp.m_worldAABB.lowerBound;
			var worldUpper = bp.m_worldAABB.upperBound;
			
			
			invQ.Set(1.0 / bp.m_quantizationFactor.x, 1.0 / bp.m_quantizationFactor.y);
			
			color.Set(0.9, 0.3, 0.9);
			for (i = 0; i < b2Settings.b2_maxProxies; ++i)
			{
				var p = bp.m_proxyPool[ i];
				if (p.IsValid() == false)
				{
					continue;
				}
				
				
				b1.lowerBound.x = worldLower.x + invQ.x * bp.m_bounds[0][p.lowerBounds[0]].value;
				b1.lowerBound.y = worldLower.y + invQ.y * bp.m_bounds[1][p.lowerBounds[1]].value;
				b1.upperBound.x = worldLower.x + invQ.x * bp.m_bounds[0][p.upperBounds[0]].value;
				b1.upperBound.y = worldLower.y + invQ.y * bp.m_bounds[1][p.upperBounds[1]].value;
				
				
				vs[0].Set(b1.lowerBound.x, b1.lowerBound.y);
				vs[1].Set(b1.upperBound.x, b1.lowerBound.y);
				vs[2].Set(b1.upperBound.x, b1.upperBound.y);
				vs[3].Set(b1.lowerBound.x, b1.upperBound.y);
				
				this.m_debugDraw.DrawPolygon(vs, 4, color);
			}
			
			
			vs[0].Set(worldLower.x, worldLower.y);
			vs[1].Set(worldUpper.x, worldLower.y);
			vs[2].Set(worldUpper.x, worldUpper.y);
			vs[3].Set(worldLower.x, worldUpper.y);
			this.m_debugDraw.DrawPolygon(vs, 4, new b2Color(0.3, 0.9, 0.9));
		}
		
		if (flags & b2DebugDraw.e_obbBit)
		{
			
			color.Set(0.5, 0.3, 0.5);
			
			for (b = this.m_bodyList; b; b = b.m_next)
			{
				xf = b.m_xf;
				for (s = b.GetShapeList(); s; s = s.m_next)
				{
					if (s.m_type != b2Shape.e_polygonShape)
					{
						continue;
					}
					
					var poly = (s);
					var obb = poly.GetOBB();
					var h = obb.extents;
					
					vs[0].Set(-h.x, -h.y);
					vs[1].Set( h.x, -h.y);
					vs[2].Set( h.x, h.y);
					vs[3].Set(-h.x, h.y);
					
					for (i = 0; i < 4; ++i)
					{
						
						var tMat = obb.R;
						var tVec = vs[i];
						var tX;
						tX = obb.center.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
						vs[i].y = obb.center.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
						vs[i].x = tX;
						
						tMat = xf.R;
						tX = xf.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
						vs[i].y = xf.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
						vs[i].x = tX;
					}
					
					this.m_debugDraw.DrawPolygon(vs, 4, color);
				}
			}
		}
		
		if (flags & b2DebugDraw.e_centerOfMassBit)
		{
			for (b = this.m_bodyList; b; b = b.m_next)
			{
				xf = b2World.s_xf;
				xf.R = b.m_xf.R;
				xf.position = b.GetWorldCenter();
				this.m_debugDraw.DrawXForm(xf);
			}
		}
	}
exports.b2World = b2World;
