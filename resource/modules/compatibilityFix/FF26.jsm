moduleAid.VERSION = '1.0.0';

moduleAid.LOADMODULE = function() {
	overlayAid.overlayURI('chrome://'+objPathString+'/content/options.xul', 'chrome://'+objPathString+'/content/optionsFF26.xul');
};

moduleAid.UNLOADMODULE = function() {
	overlayAid.removeOverlayURI('chrome://'+objPathString+'/content/options.xul', 'chrome://'+objPathString+'/content/optionsFF26.xul');
};
