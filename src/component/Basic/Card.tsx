interface Props {
  /** describe an image inside a card */
  mediaAlt: string | undefined;

  /** display an image inside a card */
  mediaSrc: string | undefined;

  /** Optional card title */
  title?: string | null;

  /** Optional card subtitle */
  subtitle?: string | null;

  /** The URL you want to link to */
  url: string;
}

const Card = (props: Props): JSX.Element => {
  const { mediaAlt, mediaSrc, title, subtitle, url } = props;

  return (
    <article className="py-4">
      <div className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <div>
          <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
            {mediaSrc && <img src={mediaSrc} alt={mediaAlt} />}
          </span>
        </div>
        {(title || subtitle) && (
          <div>
            {title && (
              <h2 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {url && (
          <a
            href={url}
            className="text-slate-500 dark:text-slate-400 mt-2 text-sm"
          >
            Read more
          </a>
        )}
      </div>
    </article>
  );
};

export default Card;
