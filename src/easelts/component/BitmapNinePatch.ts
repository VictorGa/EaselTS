import NinePatch = require('./bitmapninepatch/NinePatch');
import NinePatchCoordinates = require('./bitmapninepatch/NinePatchCoordinates');
import Bitmap = require('../display/Bitmap');
import DisplayObject = require('../display/DisplayObject');
import DisplayType = require('../enum/DisplayType');

class BitmapNinePatch extends DisplayObject {

	public type:DisplayType = DisplayType.BITMAP;

	private _patch:NinePatch;
	private _patchCoordinates:NinePatchCoordinates;

	public loaded:boolean = false;

	constructor(ninePatch:NinePatch, width:any = '100%', height:any = '100%', x:any = 0, y:any = 0, regX:any = 0, regY:any = 0){
		super(width, height, x, y, regX, regY);

		this._patch = ninePatch;

		if( !this._patch.bitmap.loaded ){
			this._patch.bitmap.addEventListener(Bitmap.EVENT_ONLOAD, this.onLoad.bind(this) );
		} else {
			this.onLoad();
		}
	}

	private onLoad():void
	{
		this.loaded = true;
	}

	public draw(ctx:CanvasRenderingContext2D, ignoreCache:boolean):boolean
	{
		if(!this.loaded){
			return false;
		}

		if(super.draw(ctx, ignoreCache))
		{
			return true;
		}

		var image = this._patch.bitmap.image;
		var coordinates = this._patch.getCoordinates(this.width, this.height);
		var sourceColumn = coordinates.sourceColumn;
		var sourceRow = coordinates.sourceRow;
		var destColumn = coordinates.destColumn;
		var destRow = coordinates.destRow;

		ctx.save();

		// left top
		ctx.drawImage(image,
			sourceColumn[0], sourceRow[0], sourceColumn[1], sourceRow[1],
			destColumn[0], destRow[0], destColumn[1], destRow[1]
		);

		// center top
		ctx.drawImage(image,
			sourceColumn[1], sourceRow[0], sourceColumn[2] - sourceColumn[1], sourceRow[1],
			destColumn[1], destRow[0], destColumn[2] - destColumn[1], destRow[1]
		);

		// right top
		ctx.drawImage(image,
			sourceColumn[2], sourceRow[0], sourceColumn[3] - sourceColumn[2], sourceRow[1],
			destColumn[2], destRow[0], destColumn[3] - destColumn[2], destRow[1]
		);

		// left middle
		ctx.drawImage(image,
			sourceColumn[0], sourceRow[1], sourceColumn[1], sourceRow[2] - sourceRow[1],
			destColumn[0], destRow[1], destColumn[1], destRow[2] - destRow[1]
		);

		// center middle
		ctx.drawImage(image,
			sourceColumn[1], sourceRow[1], sourceColumn[2] - sourceColumn[1], sourceRow[2] - sourceRow[1],
			destColumn[1], destRow[1], destColumn[2] - destColumn[1], destRow[2] - destRow[1]
		);

		// right middle
		ctx.drawImage(image,
			sourceColumn[2], sourceRow[1], sourceColumn[3] - sourceColumn[2], sourceRow[2] - sourceRow[1],
			destColumn[2], destRow[1], destColumn[3] - destColumn[2], destRow[2] - destRow[1]
		);

		// left bottom
		ctx.drawImage(image,
			sourceColumn[0], sourceRow[2], sourceColumn[1], sourceRow[3] - sourceRow[2],
			destColumn[0], destRow[2], destColumn[1], destRow[3] - destRow[2]
		);

		// center bottom
		ctx.drawImage(image,
			sourceColumn[1], sourceRow[2], sourceColumn[2] - sourceColumn[1], sourceRow[3] - sourceRow[2],
			destColumn[1], destRow[2], destColumn[2] - destColumn[1], destRow[3] - destRow[2]
		);

		// right bottom
		ctx.drawImage(image,
			sourceColumn[2], sourceRow[2], sourceColumn[3] - sourceColumn[2], sourceRow[3] - sourceRow[2],
			destColumn[2], destRow[2], destColumn[3] - destColumn[2], destRow[3] - destRow[2]
		);

		ctx.restore();

		return true;
	}
}

export = BitmapNinePatch;