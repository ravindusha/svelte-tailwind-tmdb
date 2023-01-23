export interface MovieOverview {
	id: string;
	title: Title;
	certificates: Certificates;
	ratings: Ratings;
	genres: string[];
	releaseDate: Date;
	plotOutline: Plot;
	plotSummary: Plot;
}

export interface Certificates {
	US: Me[];
}

export interface Me {
	attributes: string[];
	certificate: string;
	ratingReason: string;
	ratingsBody: string;
	country: string;
}

export interface Plot {
	id: string;
	text: string;
}

export interface Ratings {
	canRate: boolean;
	rating: number;
	ratingCount: number;
	topRank: number;
}

export interface Title {
	'@type': string;
	id: string;
	image: Image;
	runningTimeInMinutes: number;
	title: string;
	titleType: string;
	year: number;
}

export interface Image {
	height: number;
	id: string;
	url: string;
	width: number;
}
