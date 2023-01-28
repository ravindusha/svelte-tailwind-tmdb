<script lang="ts">
	import type { Review } from '../types/Review';
	import { generateAvatarImagePath } from '../utilities/generateImagePaths';

	export let reviews: Review[] = [];
</script>

<div class="mt-5">
	<h2 class="text-xl mb-5">Reviews</h2>
	<div class="grid grid-cols-[150px_1fr] gap-y-10">
		{#each reviews as review (review.id)}
			<img
				src={generateAvatarImagePath(review.author_details.avatar_path)}
				alt={review.author}
				class="w-20 h-20 rounded-full object-cover"
			/>
			<div class="flex flex-col gap-3 bg-[#1d1d21] p-4 rounded-lg">
				<div class="flex gap-5">
					<a href={review.url} target="_blank" rel="noreferrer">
						<h4 class="font-bold text-md">{review.author}</h4>
					</a>
					<h3 class="text-md text-gray">{new Date(review.updated_at).toLocaleString()}</h3>
				</div>
				<p class="text-gray-light select-none">
					{review.content.slice(0, 400) + (review.content.length > 400 ? '...' : '')}
				</p>
			</div>
		{/each}
	</div>
</div>
