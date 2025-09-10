"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import { CloudArrowUpIcon, PhotoIcon } from "@heroicons/react/24/outline";
import toast from "react-hot-toast";
import { useLanguage } from "../contexts/LanguageContext";

interface ImageUploaderProps {
	onImageUpload: (file: File, preview: string) => void;
	isProcessing: boolean;
}

export default function ImageUploader({
	onImageUpload,
	isProcessing,
}: ImageUploaderProps) {
	const [preview, setPreview] = useState<string | null>(null);
	const { t } = useLanguage();

	const onDrop = useCallback(
		(acceptedFiles: File[]) => {
			const file = acceptedFiles[0];
			if (file) {
				// Validate file size (max 10MB)
				if (file.size > 10 * 1024 * 1024) {
					toast.error(t("upload.fileSizeError"));
					return;
				}

				// Validate file type
				if (!file.type.startsWith("image/")) {
					toast.error(t("upload.fileTypeError"));
					return;
				}

				const reader = new FileReader();
				reader.onload = () => {
					const result = reader.result as string;
					setPreview(result);
					onImageUpload(file, result);
				};
				reader.readAsDataURL(file);
			}
		},
		[onImageUpload]
	);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: {
			"image/*": [".jpeg", ".jpg", ".png", ".webp", ".bmp", ".gif"],
		},
		multiple: false,
		disabled: isProcessing,
	});

	return (
		<div className="w-full max-w-2xl mx-auto">
			<motion.div
				// {...getRootProps()}
				className={`
          relative border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer
          transition-all duration-300 ease-in-out
          ${
						isDragActive
							? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
							: "border-gray-300 dark:border-gray-600 hover:border-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
					}
          ${isProcessing ? "opacity-50 cursor-not-allowed" : ""}
        `}
				whileHover={{ scale: isProcessing ? 1 : 1.02 }}
				whileTap={{ scale: isProcessing ? 1 : 0.98 }}
			>
				<input
					id="file-upload"
					{...getInputProps()}
					style={{ display: "none" }}
				/>

				{preview ? (
					<div className="space-y-4">
						<div className="relative inline-block">
							<img
								src={preview}
								alt="Preview"
								className="max-h-64 rounded-lg shadow-lg mx-auto"
							/>
							{!isProcessing && (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
								>
									<span className="text-white font-medium">
										{t("upload.clickToChange")}
									</span>
								</motion.div>
							)}
						</div>
						<p className="text-sm text-gray-600 dark:text-gray-400">
							{t("upload.clickToUploadDifferent")}
						</p>
					</div>
				) : (
					<div className="space-y-4">
						<motion.div
							animate={{ y: isDragActive ? -10 : 0 }}
							className="flex justify-center"
						>
							{isDragActive ? (
								<CloudArrowUpIcon className="h-16 w-16 text-blue-500" />
							) : (
								<PhotoIcon className="h-16 w-16 text-gray-400" />
							)}
						</motion.div>

						<div className="space-y-2">
							<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
								{isDragActive ? t("upload.dropHere") : t("upload.uploadImage")}
							</h3>
							<p className="text-gray-600 dark:text-gray-400">
								{isDragActive
									? t("upload.releaseToUpload")
									: t("upload.dragDropOrClick")}
							</p>
						</div>

						<div className="text-sm text-gray-500 dark:text-gray-500">
							<p>{t("upload.supportedFormats")}</p>
							<p>{t("upload.maxSize")}</p>
						</div>

						<label
							htmlFor="file-upload"
							className={`mt-4 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors cursor-pointer ${
								isProcessing ? "opacity-50 cursor-not-allowed" : ""
							}`}
							tabIndex={0}
							aria-disabled={isProcessing}
						>
							{t("upload.chooseFile")}
						</label>
					</div>
				)}
			</motion.div>

			{isProcessing && (
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="mt-4 text-center"
				>
					<div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
						<div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
						<span className="text-blue-800 dark:text-blue-200 font-medium">
							{t("upload.processing")}
						</span>
					</div>
				</motion.div>
			)}
		</div>
	);
}
